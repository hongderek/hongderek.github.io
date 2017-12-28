"use strict";

const header_id = "#page-header-nav";


$(window).on('load', function() {
  //fix navbars and top bar
  $(".sidebar").css("margin-top", $(".page-header").outerHeight());
  $(".sidebar").css("padding-bottom", $(".page-header").outerHeight());
  $(".content").css("margin-top", $(".page-header").outerHeight());
  
});




