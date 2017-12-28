"use strict"

const jisho_results_ID = "#jisho-search-results"
const jisho_deck_ID = "#jisho-deck"

let isLoading = false;

/*
  only if Word || Reading === exactly
  senses:
    english_definitions: ['']   ONLY take exact kanji and exact reading


*/


/*
entry = {
  is_common: bool,
  query: '',
  japanese: [               take ALL; highlight exact kanji || reading
    {
      word: '',
      reading: ''
    }
  ],
  senses: [               take ALL senses
    {
      "english_definitions":[  ],       take all definitions
      "parts_of_speech":[  ],
      "info":[  ]
    }
  ]
}
*/

/*
{
  button_id: {        #-# refering to kanji, kanji's meaning
    kanji: '',
    reading: '',
    meaning: ''
  }
}
*/
let results = {};

function noop() {};

function buildReadings(kanjiList, query) {
  let stack = [];
  kanjiList.forEach(function(japanese) {
    stack.push('<div class="jisho-card reading">【' + getOther(japanese, query) + '】</div>');
  });

  return stack.join('\n');
}

/*
{
  eng_def: '',
  info: '',
  japanese: [
    {
      word: '',
      reading: ''
    }
  ],
  pos: '',
  query: ''
}
*/
function buildEntry(meaning) {
  let query = meaning.query;
  let eng_def = meaning.eng_def;
  let readings = buildReadings(meaning.japanese, query);
  let pos = meaning.pos;

  let jisho_card = [
  '<div class="jisho-card-container">',
  '  <div class="jisho-card query">' + query + '</div>',
  '  <div class="jisho-card japanese">' + readings + '</div>',
  '  <div class="jisho-card eng_def">' + eng_def + ' <div class="jisho-card pos">' + pos + '</div></div>',
  '  <div class="remove-button">Ｘ</div>',
  '</div>'
  ].join('\n');

  $(jisho_deck_ID).prepend(jisho_card);
}

function getOther(japanese, query) {
  let kanji = japanese.word;
  let reading = japanese.reading;
  if (!kanji || !reading) {
    return '';
  }
  if (kanji === query) {
    return reading;
  }
  if (reading === query) {
    return kanji;
  }
}

function buildResult(entry, resultIndex) {
  let built_japanese = [];
  let built_reading = [];
  let built_meaning = [];

  let kanjiList = entry.japanese;
  let sensesList = entry.senses;
  let query = entry.query;

  built_japanese.push('【' + query + '】');

  for (var kanjiIndex=0; kanjiIndex<kanjiList.length; kanjiIndex++) {
    // built_japanese.push('【' + query + '】');
    built_reading.push('「' + getOther(kanjiList[kanjiIndex], query) + '」');
    for (var sensesIndex=0; sensesIndex<sensesList.length; sensesIndex++) {
      let eng_def = sensesList[sensesIndex].english_definitions.join('; ');
      let pos = sensesList[sensesIndex].parts_of_speech.join('; ');
      let info = sensesList[sensesIndex].info.join(', ');
      let meaning_id = resultIndex + '-' + sensesIndex;

      let meaning = [];
      if (sensesIndex % 2 == 0) {
        meaning.push('<div class="meaning-entry add-result bg-grey-light" id="' + meaning_id + '">');
      }
      else {
        meaning.push('<div class="meaning-entry add-result bg-grey-dark" id="' + meaning_id + '">');
      }

      if (pos) {
        meaning.push('  <div class="jisho-pos">' + pos + "</div>"); }
      meaning.push('  <div class="jisho-eng_def">' + eng_def + "</div>");
      if (info) {
        meaning.push('  <div class="jisho-info">(' + info + ")</div>"); }

      results[meaning_id] = {
        'japanese': kanjiList,
        'query': entry.query,
        'eng_def': eng_def,
        'pos': pos,
        'info': info
      }

      meaning.push('</div>')
      meaning = meaning.join('\n');
      built_meaning.push(meaning);
    }
  }

  var jisho_result = [
  '<div class="search-result">',
  '  <section class="jisho-kanji">' + built_japanese.join('\n') + '</section>',
  '  <section class="jisho-reading">' + built_reading.join('') + '</section>',
  '  <section class="jisho-meaning">' + built_meaning.join('') + '</section>',
  '</div>'
  ].join('\n');

  isLoading = false;
  $(".jisho-results-loading-text").css("display", "none");
  $(".jisho-results-no-results").css("display", "none");
  $(jisho_results_ID).append(jisho_result);
}

// get just the kanji/readings that match exactly
function extract(japanese, query) {
  if (japanese.length > 0) {
    let first = japanese[0];
    let rest = japanese.slice(1);

    if (first.word === query || first.reading === query) {
      return [first].concat(extract(rest, query));
    }
    else {
      return extract(rest, query);
    }
  }
  else {
    return []
  }
}

function prune(datapoint, callback) {
  let entry = {
    is_common: datapoint.is_common,
    query: datapoint.query,
    japanese: extract(datapoint.japanese, datapoint.query),
    senses: []
  };

  datapoint.senses.forEach(function(obj) {
    entry.senses.push({
      english_definitions: obj.english_definitions,
      parts_of_speech: obj.parts_of_speech,
      info: obj.info
    });
  });
  datapoint.japanese.forEach(function(obj) {
    if (obj.word === datapoint.query || obj.reading === datapoint.query) {
      entry.japanese == obj;
    }
  });

  callback(entry);
}

// is the EXACT kanji or reading there?
function isExactMatch(datapoint) {
  if (datapoint.japanese.length > 0) {
    let first = datapoint.japanese[0];
    let rest = datapoint.japanese.slice(1);
    let query = datapoint.query;

    // datapoint passes by reference; can't just do datapoint.japanese = rest
    let next_check = {
      japanese: rest,
      query: query
    }
    return (first.word === query || first.reading === query) || isExactMatch(next_check);
  }
  else {
    isLoading = false;
    $(".jisho-results-loading-text").css("display", "none");
    return false
  }
}

function processData(datapoint, index) {
  // console.log(JSON.stringify(datapoint))
  // if (datapoint.is_common == true && isExactMatch(datapoint)) {
  if (isExactMatch(datapoint)) {
    prune(datapoint, function(datapoint) {
      buildResult(datapoint, index)
    })
  }
  isLoading = false;
  $(".jisho-results-loading-text").css("display", "none");
}

function searchJisho(input) {
  if (input == '') {
    isLoading = false;
    $(".jisho-results-loading-text").css("display", "none");
  }
  else {
    $(jisho_results_ID).empty();
    isLoading = true;
    $(".jisho-results-loading-text").css("display", "block");
    let opts = {
      query: input
    }
    $.get("https://still-stream-49882.herokuapp.com/jisho", opts, function(response) {
      response = JSON.parse(response);
      let data = response.data; // data = [{}]
      console.log(response)
      data.forEach(function(datapoint, index) {
        datapoint.query = input;
        processData(datapoint, index);
      })
      if (data.length == 0) {
        isLoading = false;
        $(".jisho-results-loading-text").css("display", "none");
      }
    })
  }
}

$(window).on('load', function() {
  $(".search-bar").css("display", "initial");
});


$("#jisho-submit-button").click(function() {
  if (!isLoading) {
    var input = $('#jisho-search-input').val();
    searchJisho(input)
  }
});

$('#jisho-search-input').keyup(function(e) {
  if(e.which == 13 && !isLoading) {
    var input = $('#jisho-search-input').val();
    searchJisho(input)
  }
});

$("#jisho-clear-button").click(function() {
  $(jisho_results_ID).empty();
});

$(document).on('click', '.add-result', function() {
  let meaning = results[this.id];
  buildEntry(meaning)
});

$(document).on('click', '.remove-button', function() {
  $(this).parent().remove();
});













