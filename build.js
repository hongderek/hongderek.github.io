"use strict";

var header_id = "#chap-header-nav";

var grammar_id = "#chap-content-grammar";
var misc_id = "#chap-content-misc";
var kanji_id = "#chap-content-kanji";


$(window).on('load', function() {
  var lesson_num = '１';
  var kanji_list = L1_300_kanji_list;

  for (var word in kanji_list) {
    var kl_kanji = kanji_list[word].kanji;
    var kl_reading = kanji_list[word].reading;
    var kl_meaning = kanji_list[word].meaning;
    var kanji_entry = [
    '<div class="kanji-entry" id="kanji-entry-' + word + '">',
    '  <word class="kanji">' + kl_kanji + '</word>',
    '  <word class="reading">' + kl_reading + '</word>',
    '  <word class="meaning">' + kl_meaning + '</word>',
    '<div>'
    ].join('\n');


    $(header_id).text("日本語３００／第" + lesson_num + "課");
    $(kanji_id).append(kanji_entry);

  }
});


$( "#show-kanji" ).on( "click", function() {
  $(".kanji").show();
});
$( "#hide-kanji" ).on( "click", function() {
  $(".kanji").hide();
});
$( "#show-reading" ).on( "click", function() {
  $(".reading").show();
});
$( "#hide-reading" ).on( "click", function() {
  $(".reading").hide();
});
$( "#show-meaning" ).on( "click", function() {
  $(".meaning").show();
});
$( "#hide-meaning" ).on( "click", function() {
  $(".meaning").hide();
});

// $( "#foo" ).on( "click", function() {
//   alert( $( this ).text() );
// });
// $( "#foo" ).trigger( "click" );


