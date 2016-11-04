"use strict";

const header_id = "#page-header-nav";

const chapter_id = "#content-chapter";
const chapter_nav_id = '#sidebar-chapter-list'


$(window).on('load', function() {
  var course_name = local_course_name;
  var chap_list = local_chap_list;

  for(var i=0; i<chap_list.length; i++) {
    var cl_chap_name = chap_list[i].name;
    var cl_chap_path = chap_list[i].path;

    var chapter_entry = [
    '<div class="chapter-entry" id="course-chap-' + i + '">',
    '  <chapter><a href="./' + cl_chap_path + '/">' + cl_chap_name + '</a></chapter>',
    '</div>'
    ].join('\n');
    var chapter_nav_entry = [
    '  <li class="sidebar-subtopic"><a href="#course-chap-' + i + '">' + cl_chap_name + '</a></li>'
    ].join('\n');

    $(chapter_nav_id).append(chapter_nav_entry);
    $(chapter_id).append(chapter_entry);
  }

  $(header_id).append('／<a href="../">日本語</a>／' + local_course_name);
  
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


