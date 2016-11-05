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
      gl_use += '<species>' + jap + eng + '</species>';
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
    '<div class="grammar-entry" id="content-grammar-point-' + i + '">',
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


