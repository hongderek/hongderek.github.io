"use strict";

const header_id = "#page-header-nav";

const grammar_id = "#content-grammar";
const grammar_nav_id = "#sidebar-grammar-list"
const misc_id = "#content-misc";
const misc_nav_id = "#sidebar-misc-list"
const kanji_id = "#content-kanji";


$(window).on('load', function() {
  var course_name = local_course_name;
  var chap_name = local_chap_name;
  var kanji_list = $.csv.toObjects(chap_kanji_str);
  var grammar_list = chap_grammar_list;

  $(header_id).append('／<a href="../../">日本語</a>／<a href="../">' + local_course_name + '</a>／' + chap_name);

  for (var i=0; i<kanji_list.length; i++) {
    var kl_kanji = kanji_list[i].kanji;
    var kl_reading = kanji_list[i].reading;
    var kl_meaning = kanji_list[i].meaning;
    var kl_class = '';
    if(kanji_list[i].kaku == 'hai') { kl_class =  '"kanji-entry kaku"'; }
    else { kl_class =  '"kanji-entry"'; }
    var kanji_entry = [
    '<div class=' + kl_class + ' id="kanji-entry-' + i + '">',
    '  <kanji class="kanji">' + kl_kanji + '</kanji>',
    '  <kanji class="reading">' + kl_reading + '</kanji>',
    '  <kanji class="meaning">' + kl_meaning + '</kanji>',
    '</div>'
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
    '<div class="grammar-entry" id="content-grammar-point-' + i + '">',
    '  <section class="grammar-point">' + gl_grammar_point + '</section>',
    '  <section class="grammar-meaning bg-grey-light"><grammar class="prepend">Meaning: </grammar>' + gl_meaning + '</section>',
    '  <section class="grammar-use bg-grey-dark"><grammar class="prepend">Use: </grammar>' + gl_use + '</section>',
    '  <section class="grammar-example bg-grey-light"><grammar class="prepend">Example: </grammar>' + gl_example + '</section>',
    '  <section class="grammar-other bg-grey-dark"><grammar class="prepend">Notes: </grammar>' + gl_other + '</section>',
    '</div>'
    ].join('\n');
    var grammar_nav_entry = [
    '  <li class="sidebar-subtopic"><a href="#content-grammar-point-' + i + '">' + gl_spec + '</a></li>'
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


