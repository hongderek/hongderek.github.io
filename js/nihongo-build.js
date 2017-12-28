"use strict";

const header_id = "#page-header-nav";

const course_id = "#content-course";
const course_nav_id = '#sidebar-course-list'


$(window).on('load', function() {
  if (screen.width <= 950) {
    var redirect = './m.html' + location.hash;
    window.location = redirect;
  }

  var course_list = local_course_list;

  //fix navbars and top bar
  $(".sidebar").css("margin-top", $(".page-header").outerHeight());
  $(".sidebar").css("padding-bottom", $(".page-header").outerHeight());
  $(".content").css("margin-top", $(".page-header").outerHeight());

  for(var i=0; i<course_list.length; i++) {
    var cl_course_name = course_list[i].name;
    var cl_course_path = course_list[i].path;

    var course_entry = [
    '<div class="course-entry anchor" id="nihongo-course-' + i + '">',
    '  <course><a href="./' + cl_course_path + '/">' + cl_course_name + '</a></course>',
    '</div>'
    ].join('\n');
    var course_nav_entry = [
    '  <li class="sidebar-subtopic"><a href="#nihongo-course-' + i + '">' + cl_course_name + '</a></li>'
    ].join('\n');

    $(course_nav_id).append(course_nav_entry);
    $(course_id).append(course_entry);
  }
  
});




