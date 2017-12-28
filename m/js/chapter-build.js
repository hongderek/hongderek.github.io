"use strict";

const header_id = "#page-header-nav";

const grammar_id = "#grammar-entry-wrapper";
// const grammar_nav_id = "#sidebar-grammar-list"
const misc_id = "#content-misc";
// const misc_nav_id = "#sidebar-misc-list"
const kanji_id = "#kanji-entry-wrapper";

const initURL = 'https://hongderek.github.io'

let wanakana;

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

// kanji_list is a JSON of kanji
function prepareKanji(kanji_list) {
  for (var i=0; i<kanji_list.length; i++) {
    var kl_kanji = kanji_list[i].kanji;
    var kl_reading = kanji_list[i].reading;
    var kl_meaning = kanji_list[i].meaning;

    var kl_suru = (kanji_list[i].suru == 'hai');
    var kl_kaku = (kanji_list[i].kaku == 'hai');

    var kl_class = '"kanji-entry';
    if(kl_kaku) { kl_class +=  ' kaku"'; }
    else if(kl_suru) { kl_class += ' suru"'; }
    else { kl_class += '"'; }

    if(kl_kanji == '・') { kl_kanji = kl_reading; }

    var ruby_block = '';
    var burst_kanji = wanakana.tokenize(kl_kanji); //[]

    var burst_reading = wanakana.tokenize(kl_reading); //[]
    var cut_reading = cutReading(burst_reading);

    for (var j=0; j<burst_kanji.length; j++) {
      var kanji_token = burst_kanji[j];
      var furigana = '';

      if (wanakana.isKanji(kanji_token)) {
        furigana = cut_reading.splice(0,1)[0];
      }

      ruby_block = ruby_block.concat('<rb>', kanji_token, '<rt>', furigana);
    }

    var kanji_entry = [
    '<div class=' + kl_class + ' id="kanji-entry-' + i + '">',
    '  <kanji class="kanji"><ruby><rb><rt>' + ruby_block + '</ruby></kanji>',
    '  <kanji class="reading">' + kl_reading + '</kanji>',
    '  <kanji class="meaning">' + kl_meaning + '</kanji>',
    '</div>'
    ].join('\n');

    $(kanji_id).append(kanji_entry);
  }
}


$(window).on('load', function() {
  require([initURL + '/js/wanakana.min.js'], function(script) {
    wanakana = script;
    postWanakanaLoad();
    // TESTFUNCTION();
  });
});

function TESTFUNCTION() {
  var course_name = local_course_name;
  var course_path = local_course_path;
  var chap_name = local_chap_name;
  var chap_path = local_chap_path;

  var kanji_JSONpath = initURL + "/json/kanji/" + course_path + "-" + chap_path + "-kanji.JSON";


  $.getJSON(kanji_JSONpath, function(json) {
    prepareKanji(json)
  })
}


function postWanakanaLoad() {
  var course_name = local_course_name;
  var course_path = local_course_path;
  var chap_name = local_chap_name;
  var chap_path = local_chap_path;

  var kanji_JSONpath = initURL + "/json/kanji/" + course_path + "-" + chap_path + "-kanji.JSON";


  $.getJSON(kanji_JSONpath, function(json) {
    prepareKanji(json)
  })
  var grammar_list = chap_grammar_list;
  var note_list = chap_note_list;

  $(header_id).append('／<a href="/">日本語</a>／<a href="/' + local_course_path + '">' + local_course_name + '</a>／' + chap_name);

  // //fix navbars and top bar
  // $(".sidebar").css("margin-top", $(".page-header").outerHeight());
  // $(".sidebar").css("padding-bottom", $(".page-header").outerHeight());
  // $(".content").css("margin-top", $(".page-header").outerHeight());

  // $(".anchor:before").css("margin-top", -$(".page-header").outerHeight());
  // $(".anchor:before").css("height", $(".page-header").outerHeight());


  /**
    {
      topic: '',
      spec: '',
      subtopic_list: [
        {
          subtopic: '',
          desc: ['']
        }
      ]
    }
  */
  for (var i=0; i<chap_note_list.length; i++) {
    var nl_topic = note_list[i].topic;
    var nl_spec = note_list[i].spec;
    var nl_subtopic_list = note_list[i].subtopic_list;

    var note_expo = '';
    for(var j=0; j<nl_subtopic_list.length; j++) {
      var subtopic_name = nl_subtopic_list[j].subtopic;
      var subtopic_desc = nl_subtopic_list[j].desc;
      note_expo += '<note class="subtopic">' + subtopic_name + '</note>';
      for(var k=0; k<subtopic_desc.length; k++) {
        note_expo += '<note class="desc">' + subtopic_desc[k] + '</note>';
      }
    }


    var note_entry = [
    '<div class="note-entry">',
    '  <section class="note-topic anchor" id="content-note-' + i + '">' + nl_topic + '</section>',
    '  <section class="note-expo">',
         note_expo,
    '  </section>',
    '</div>'
    ].join('\n');

    var note_nav_entry = [
    '  <li class="sidebar-subtopic"><a href="#content-note-' + i + '">' + nl_spec + '</a></li>'
    ].join('\n');

    // $(misc_nav_id).append(note_nav_entry);
    $(misc_id).append(note_entry);
  }

  for(var i=0; i<grammar_list.length; i++) {
    var gl_grammar_point = grammar_list[i].grammar_point;
    var gl_spec = grammar_list[i].spec;
    var gl_meaning = grammar_list[i].meaning;
    var gl_use_obj = grammar_list[i].use;
    var gl_example_list = grammar_list[i].example;
    var gl_other = grammar_list[i].other;

    /*use: {
      text: '',
      species: [
        {
          jap: '',
          eng: ''
        }
      ],
    }*/

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
      },
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
    '<div class="grammar-entry anchor" id="content-grammar-point-' + i + '">',
    '  <section class="grammar-point">' + gl_grammar_point + '</section>',
    '  <section class="grammar-meaning bg-grey-light"><grammar class="prepend">Meaning: </grammar><grammar>' + gl_meaning + '</grammar></section>',
    '  <section class="grammar-use bg-grey-dark"><grammar class="prepend">Use: </grammar><grammar>' + gl_use + '</grammar></section>',
    '  <section class="grammar-example bg-grey-light"><grammar class="prepend">Example: </grammar><grammar>' + gl_example + '</grammar></section>',
    '  <section class="grammar-other bg-grey-dark"><grammar class="prepend">Notes: </grammar><grammar>' + gl_other + '</grammar></section>',
    '</div>'
    ].join('\n');

    var grammar_nav_entry = [
    '  <li class="sidebar-subtopic"><a href="#content-grammar-point-' + i + '">' + gl_spec + '</a></li>'
    ].join('\n');

    // $(grammar_nav_id).append(grammar_nav_entry);
    $(grammar_id).append(grammar_entry);
  }

  // V IMPORTANTE MY FRIENDERINOS
  if (location.hash) {
    $("#grammar-entry-wrapper").show();
    var anchor = $(location.hash);
    window.scrollTo(0, anchor.offset().top);
  }
  
}


$( "#toggle-kanji" ).on( "click", function() {
  $("kanji.kanji").toggle();
});
$( "#toggle-meaning" ).on( "click", function() {
  $("kanji.meaning").toggle();
});
$( "#toggle-reading" ).on( "click", function() {
  $("kanji.reading").toggle();
});
$("#toggle-furigana").click(function() {
  $("rt").toggle();
});

$( "#content-grammar" ).on( "click", ".grammar-entry", function() {
  var section_name = $(this).attr('id');
  console.log(section_name + ' clicked');
  $(this).children('.grammar-use').toggle();
});

$( ".content-topic" ).on( "click", function() {
  var section_name = $(this).parent().attr('id');
  console.log($(this).parent().attr('id') + ' clicked');
  switch(section_name) {
    case "content-grammar":
      $("#grammar-entry-wrapper").toggle(); break;
    case "content-misc":
      $(".note-entry").toggle(); break;
    case "content-kanji":
      $(".kanji-toggle-button").toggle();
      $("#kanji-entry-wrapper").toggle();
      break;
  }
});








// $( "#foo" ).on( "click", function() {
//   alert( $( this ).text() );
// });
// $( "#foo" ).trigger( "click" );


