"use strict";

const header_id = "#chap-header-nav";

const grammar_id = "#chap-content-grammar";
const grammar_nav_id = "#chap-nav-grammar-topic"
const misc_id = "#chap-content-misc";
const kanji_id = "#chap-content-kanji";


$(window).on('load', function() {
  var course_name = local_course_name;
  var chap_name = local_chap_name;
  var kanji_list = $.csv.toObjects(chap_kanji_str);
  var grammar_list = chap_grammar_list;

  $(header_id).append('<a href="../../nihongo.html">日本語</a>／<a href="../course.html">' + local_course_name + '</a>／' + chap_name);

  for (var i=0; i<kanji_list.length; i++) {
    var kl_kanji = kanji_list[i].kanji;
    var kl_reading = kanji_list[i].reading;
    var kl_meaning = kanji_list[i].meaning;
    var kanji_entry = [
    '<div class="kanji-entry" id="kanji-entry-' + i + '">',
    '  <kanji class="kanji">' + kl_kanji + '</kanji>',
    '  <kanji class="reading">' + kl_reading + '</kanji>',
    '  <kanji class="meaning">' + kl_meaning + '</kanji>',
    '<div>'
    ].join('\n');

    $(kanji_id).append(kanji_entry);
  }

  for(var i=0; i<grammar_list.length; i++) {
    var gl_grammar_point = grammar_list[i].grammar_point;
    var gl_spec = grammar_list[i].spec;
    var gl_meaning = grammar_list[i].meaning;
    var gl_use = grammar_list[i].use;
    var gl_example = grammar_list[i].example;
    var gl_other = grammar_list[i].other;
    var grammar_entry = [ 
    '<div class="grammar-entry" id="chap-content-grammar-' + i + '">',
    '  <grammar class="grammar-point">' + gl_grammar_point + '</grammar>',
    '  <section class="grammar-entry-t1">',
    '    <grammar class="prepend">Meaning: </grammar>',
    '    <grammar class="meaning">' + gl_meaning + '</grammar>',
    '  </section>',
    '  <section class="grammar-entry-t2">',
    '    <grammar class="prepend">Use: </grammar>',
    '    <grammar class="use">' + gl_use + '</grammar>',
    '  </section>',
    '  <section class="grammar-entry-t1">',
    '    <grammar class="prepend">Example: </grammar>',
    '    <grammar class="example">' + gl_example + '</grammar>',
    '  </section>',
    '  <section class="grammar-entry-t2">',
    '    <grammar class="prepend">Notes: </grammar>',
    '    <grammar class="other">' + gl_other + '</grammar>',
    '  </section>',
    '</div>'
    ].join('\n');
    var grammar_nav_entry = [
    '  <li class="sub-topic"><a href="#chap-content-grammar-' + i + '">' + gl_spec + '</a></li>'
    ].join('\n');

    $(grammar_nav_id).append(grammar_nav_entry);
    $(grammar_id).append(grammar_entry);
  }
  
});


$( "#show-kanji" ).on( "click", function() {
  $("kanji.kanji").show();
});
$( "#hide-kanji" ).on( "click", function() {
  $("kanji.kanji").hide();
});
$( "#show-reading" ).on( "click", function() {
  $("kanji.reading").show();
});
$( "#hide-reading" ).on( "click", function() {
  $("kanji.reading").hide();
});
$( "#show-meaning" ).on( "click", function() {
  $("kanji.meaning").show();
});
$( "#hide-meaning" ).on( "click", function() {
  $("kanji.meaning").hide();
});

// $( "#foo" ).on( "click", function() {
//   alert( $( this ).text() );
// });
// $( "#foo" ).trigger( "click" );


