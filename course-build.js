"use strict";

const header_id = "#course-header-nav";

const chapter_id = "#course-content-chaps";
const chapter_nav_id = '#course-nav-chap-topic'


$(window).on('load', function() {
  var course_name = local_course_name;
  var chap_list = local_chap_list;

  for(var i=0; i<chap_list.length; i++) {
    var cl_chap_name = chap_list[i].name;
    var cl_chap_path = chap_list[i].path;

    var chapter_entry = [
    '<div class="chapter-entry" id="course-chap-' + i + '">',
    '  <chapter><a href="' + cl_chap_path + '">' + cl_chap_name + '</a></chapter>',
    '</div>'
    ].join('\n');
    var chapter_nav_entry = [
    '  <li class="sub-topic"><a href="#course-chap-' + i + '">' + cl_chap_name + '</a></li>'
    ].join('\n');

    $(chapter_nav_id).append(chapter_nav_entry);
    $(chapter_id).append(chapter_entry);
  }

  $(header_id).append('<a href="../nihongo.html">日本語</a>／' + local_course_name);
  
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


