'use strict'

const dataFilename = 'chapter-data.js'
const initURL = 'https://hongderek.github.io'

const grammar_results_ID = "#grammar-search-results";
const kanji_results_ID = "#kanji-search-results";

const database = [
  {
    course: 'JAPN0300',
    chapters: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7']
  },{
    course: 'JAPN0400',
    chapters: ['L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15']
  },{
    course: 'JAPN0500',
    chapters: ['R6', 'R40']
  }
]

// does not work as intended
// require([]) is async call, probably needed because of circular dependency?  Maybe put search.js to load after require in head <script> tag?
let wanakana;
require(['./js/wanakana.min.js'], function(script) {
  wanakana = script;
});
// import wanakana from './js/wanakana.min';



/*
[
  {
    entry: {},
    path: ''
  }
]
*/
let total_grammar = [];

/*
[
  {
    kanji: '',
    reading: '',
    meaning: '',
    (opt)kaku: 'hai' or '',
    (opt)suru: 'hai' or ''
  }
]
*/
let total_kanji = [];

function noop() {}

function buildGrammarEntry(entry, path) {
  var gl_grammar_point = entry.grammar_point;
  var gl_spec = entry.spec;
  var gl_meaning = entry.meaning;
  var gl_use_obj = entry.use;
  var gl_example_list = entry.example;
  var gl_other = entry.other;

  /*
  use: {
    text: '',
    species: [
      {
        jap: '',
        eng: ''
      }
    ]
  }
  */

  var gl_use = gl_use_obj.text;
  var gl_use_species_list = gl_use_obj.species;
  for(var j=0; j<gl_use_species_list.length; j++) {
    var jap = gl_use_species_list[j].jap;
    var eng = gl_use_species_list[j].eng;
    gl_use += '<species class="combo"><species class="jap">' + jap + '</species><species class="eng">' + eng + '</species></species>';
  }

  /*example: [
    {
      sentence: {
        ante: '',
        highlight: '',
        post: ''
      },
      translation: ''
    }
  ]*/
  var sent_ante = gl_example_list[0].sentence.ante;
  var sent_highlight = gl_example_list[0].sentence.highlight;
  var sent_post = gl_example_list[0].sentence.post;
  var sent_translation = gl_example_list[0].translation;
  var gl_example = sent_ante + '<b class="eg-highlight">' + sent_highlight + '</b>' + sent_post + sent_translation;
  for(var j=1; j<gl_example_list.length; j++) {
    sent_ante = gl_example_list[j].sentence.ante;
    sent_highlight = gl_example_list[j].sentence.highlight;
    sent_post = gl_example_list[j].sentence.post;
    sent_translation = gl_example_list[j].translation;
    gl_example += '<br>' + sent_ante + '<b class="eg-highlight">' + sent_highlight + '</b>' + sent_post + sent_translation;
  }

  var grammar_entry = [ 
  '<div class="grammar-entry anchor">',
  '  <section class="grammar-point">' + gl_grammar_point + ' <a href="' + path + '">{>>>Go to Entry}</a>' + '</section>',
  '  <section class="grammar-meaning bg-grey-light"><grammar class="prepend">Meaning: </grammar><grammar>' + gl_meaning + '</grammar></section>',
  '  <section class="grammar-use bg-grey-dark"><grammar class="prepend">Use: </grammar><grammar>' + gl_use + '</grammar></section>',
  '  <section class="grammar-example bg-grey-light"><grammar class="prepend">Example: </grammar><grammar>' + gl_example + '</grammar></section>',
  '  <section class="grammar-other bg-grey-dark"><grammar class="prepend">Notes: </grammar><grammar>' + gl_other + '</grammar></section>',
  '</div>'
  ].join('\n');

  $(grammar_results_ID).append(grammar_entry);
}

function cutReading(reading) {
  let cutup = [];
  let inParens = false;

  for (var i=0; i<reading.length; i++) {
    let reading_token = reading[i];

    if (!inParens) {
      if (reading_token.charAt(0) === '（') { inParens = true; }
      else if (reading_token !== '〜') { cutup.push(reading_token); }
    }
    else if (inParens) {
      if (reading_token.charAt(0) === '）') { inParens = false; }
    }
  }

  return cutup
}

function buildKanjiEntry(entry) {
  var kl_kanji = entry.kanji;
  var kl_reading = entry.reading;
  var kl_meaning = entry.meaning;

  var kl_suru = (entry.suru == 'hai');
  var kl_kaku = (entry.kaku == 'hai');

  var kl_class = '"kanji-entry';

  if(kl_kaku) { kl_class += ' kaku"'; }
  if(kl_suru) { kl_class += ' suru"'; }

  if(kl_kanji == '・') { kl_kanji = kl_reading; }

  var ruby_block = '';
  var burst_kanji = wanakana.tokenize(kl_kanji); //[]
  var burst_reading = wanakana.tokenize(kl_reading); //[]
  var cut_reading = cutReading(burst_reading);

  for (var i=0; i<burst_kanji.length; i++) {
    var kanji_token = burst_kanji[i];
    var furigana = '';

    if (wanakana.isKanji(kanji_token)) {
      furigana = cut_reading.splice(0,1)[0];
    }

    ruby_block = ruby_block.concat('<rb>', kanji_token, '</rb><rt>', furigana, '</rt>');
  }
  
  var kanji_entry = [
  '<div class=' + kl_class + '">',
  '  <kanji class="kanji"><ruby>' + ruby_block + '</ruby></kanji>',
  '  <kanji class="reading">' + kl_reading + '</kanji>',
  '  <kanji class="meaning">' + kl_meaning + '</kanji>',
  '</div>'
  ].join('\n');

  $(kanji_results_ID).append(kanji_entry);
}

function polyIncluded(testEl, ...argList) {
  let isIncluded = false;
  for (var i=0; i<argList.length; i++) {
    let testArg = argList[i].toLowerCase();
    isIncluded = isIncluded || testArg.includes(testEl);
  }

  return isIncluded
}

// handles multiple search terms, but usually not needed
function isMatch(splitQuery, grammar_entry) {
  if (splitQuery.length == 0) {
    return true;
  }
  else {
    let firstEl = splitQuery[0];
    let rest = splitQuery.slice(1);

    let grammar_point = grammar_entry.grammar_point;
    let grammar_alt_def = grammar_entry.alt_def;
    let grammar_meaning = grammar_entry.meaning;

    if (polyIncluded(firstEl, grammar_point, grammar_alt_def, grammar_meaning)) {
      return true && isMatch(rest, grammar_entry)
    }
    else {
      return false && isMatch(rest, grammar_entry)
    }
  }
}

function searchGrammar(query, callback) {
  $(grammar_results_ID).empty();
  $("#grammar-no-results").css("display", "none");

  callback = callback || noop

  let queryLowercase = query.toLowerCase();

  // does not split on space (ie: whole search with space is considered)
  // splits on '　＋' (ie: include things that have this AND this)
  let splitQuery = queryLowercase.split('　＋');

  let noResults = true;
  for (var i=0; i<total_grammar.length; i++) {
    let grammar_entry = total_grammar[i].entry;
    let grammar_path = total_grammar[i].path

    if (isMatch(splitQuery, grammar_entry)) {
      noResults = false;
      buildGrammarEntry(grammar_entry, grammar_path);
    } // and the next query, too
  }

  if (noResults) {
    $("#grammar-no-results").css("display", "block");
  }
}

function searchKanji(query, callback) {
  $(kanji_results_ID).empty();
  $("#kanji-no-results").css("display", "none");

  callback = callback || noop

  let noResults = true;
  for (var i=0; i<total_kanji.length; i++) {
    let kanji_entry = total_kanji[i];
    // let kanji_path = total_kanji[i].path;
    // not used... yet?

    let kanji = kanji_entry.kanji;
    let reading = kanji_entry.reading;
    let clean_reading = reading.replace(/[（）]/g,'')

    if (kanji.includes(query) || clean_reading.includes(query)) {
      noResults = false;
      buildKanjiEntry(kanji_entry);
    }
  }

  if (noResults) {
    $("#kanji-no-results").css("display", "block");
  }
}

$(window).on('load', function() {
  let grammar_ajaxes = [];
  let kanji_ajaxes = [];
  let dfd_grammar = $.Deferred();
  let dfd_kanji = $.Deferred();

  for (var courseIndex=0; courseIndex<database.length; courseIndex++) {
    let courseData = database[courseIndex];

    let coursePath = courseData.course;
    let courseChapters = courseData.chapters;

    for (var chapterIndex=0; chapterIndex<courseChapters.length; chapterIndex++) {
      let chapterPath = courseChapters[chapterIndex];

      grammar_ajaxes.push(function() {
        $.getScript({
          url: initURL + '/' + coursePath + '/' + chapterPath + '/' + dataFilename,
          success: function(data) {
            for (var grammarIndex=0; grammarIndex<chap_grammar_list.length; grammarIndex++) {
              let grammar_entry = chap_grammar_list[grammarIndex];
              let grammar_entry_path = initURL + '/' + coursePath + '/' + chapterPath + '/#content-grammar-point-' + grammarIndex;
              total_grammar.push({
                entry: grammar_entry,
                path: grammar_entry_path
              })
            }
            // console.log("loading grammar " + coursePath + " " + chapterPath)
          }
        })
      });

      kanji_ajaxes.push(function() {
        var kanji_JSONpath = initURL + "/json/kanji/" + coursePath + "-" + chapterPath + "-kanji.JSON";
        $.getJSON(kanji_JSONpath, function(json) {
          total_kanji = total_kanji.concat(json);
          // console.log("loading kanji " + coursePath + " " + chapterPath)
        }).fail(function(jqxhr, status, err) {
          console.log(status + ", " + err)
        });
      });
    }
  }

  dfd_grammar.done(grammar_ajaxes); //.done(function () { console.log("...grammar loaded"); });
  dfd_kanji.done(kanji_ajaxes); //.done(function () { console.log("...kanji loaded"); });
  dfd_grammar.resolve();
  dfd_kanji.resolve();

  // i don't actually think these loading texts work; they are an artifact of when I didn't use deferred; TO FIX
  $("#grammar-loading-text").css("display", "none");
  $("#kanji-loading-text").css("display", "none");

  $(".search-bar").css("display", "initial");
});

// NEED TO SEPERATE THIS FROM THE MAIN PAGE
//bug: hides it on desktop ver.; needs to be only on mobile; no search.js for mobile, must recoordinate
$( "#grammar-search-results" ).on( "click", ".grammar-entry", function() {
  var section_name = $(this).attr('id');
  console.log(section_name);
  $(this).children('.grammar-use').toggle();
});

$("#grammar-submit-button").click(function() {
  var input = $('#grammar-search-input').val();
  searchGrammar(input)
});
$('#grammar-search-input').keyup(function(e) {
  if(e.which == 13) {
    var input = $('#grammar-search-input').val();
    searchGrammar(input)
  }
});

$("#kanji-submit-button").click(function() {
  var input = $('#kanji-search-input').val();
  searchKanji(input)
});
$('#kanji-search-input').keyup(function(e) {
  if(e.keyCode == 13) {
    var input = $('#kanji-search-input').val();
    searchKanji(input)
  }
});

$("#kanji-clear-button").click(function() {
  $(kanji_results_ID).empty();
});
$("#grammar-clear-button").click(function() {
  $(grammar_results_ID).empty();
});

$("#furigana-showhide-button").click(function() {
  $("rt").toggle();
});









