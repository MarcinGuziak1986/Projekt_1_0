'use strict'

    ($(document).ready(function () {
    $("#info, #tech_skills").show();
    $("#about, #exp, #edu, #skills, #int, #lang, #soft, #it_courses, #it_webinars, #it_projects, #courses, #webinars, #hobby").hide();
    $("#info_button").click(function () {
        $("#info").toggle();
    });
    $("#tech_skills_button").click(function () {
        $("#tech_skills").toggle();
    });
    $("#about_button").click(function () {
        $("#about").toggle();
    });
    $("#exp_button").click(function(){
        $("#exp").toggle();
    });
    $("#edu_button").click(function(){
        $("#edu").toggle();
    });
    $("#skills_button").click(function(){
        $("#skills").toggle();
        $("#int, #lang, #soft").hide();
    });
    $("#int_button").click(function(){
        $("#int").toggle();
    });
    $("#lang_button").click(function(){
        $("#lang").toggle();
    });
    $("#soft_button").click(function(){
        $("#soft").toggle();
    });
    $("#it_courses_button").click(function(){
        $("#it_courses").toggle();
    });
    $("#it_webinars_button").click(function(){
        $("#it_webinars").toggle();
    });
    $("#it_projects_button").click(function(){
        $("#it_projects").toggle();
    });
    $("#courses_button").click(function(){
        $("#courses").toggle();
    });
    $("#webinars_button").click(function(){
        $("#webinars").toggle();
    });
    $("#hobby_button").click(function(){
        $("#hobby").toggle();
    });
})
)();