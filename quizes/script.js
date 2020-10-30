$(document).ready(function () {
    let quest = [];
    let slide = 0;
    let score = 0;
    

    $(".startbt").click(function () {
        $(".qcontaioner").show();
        $("#q1Q1").show();
        $(".startbt").hide();
        $("#last").show();
        $("#next").show();
        $("#question").html(quest[slide].p);
        $("#ans1q1").html(quest[slide].a1);
        $("#ans2q1").html(quest[slide].a2);
        $("#ans3q1").html(quest[slide].a3);
        $("#ans4q1").html(quest[slide].a4);
    });
    $("#next").click(function () {
        slide++;
        $("#question").html(quest[slide].p);
        $("#ans1q1").html(quest[slide].a1);
        $("#ans2q1").html(quest[slide].a2);
        $("#ans3q1").html(quest[slide].a3);
        $("#ans4q1").html(quest[slide].a4);
        if (slide == 10) {
            slide = 0;
        }
    });
    $("#last").click(function () {
        slide--;
        $("#question").html(quest[slide].p);
        $("#ans1q1").html(quest[slide].a1);
        $("#ans2q1").html(quest[slide].a2);
        $("#ans3q1").html(quest[slide].a3);
        $("#ans4q1").html(quest[slide].a4);
        if (slide == 0) {
            slide = 0;
        }
    });
 class Header {
    constructor(q, s){
        this.q = q;
        this.s = s;
    } 
 }
    class Question {
        constructor(p, a1, a2, a3, a4) {
            this.p = p;
            this.a1 = a1;
            this.a2 = a2;
            this.a3 = a3;
            this.a4 = a4;

        }
    }
    quest.push(new Question("Question 1", "answer 1 question 1", "answer 2 question 1", "answer 3 question 1", "answer 4 question 1"));
    quest.push(new Question("Question 2", "answer 1 question 2", "answer 2 question 2", "answer 3 question 2", "answer 4 question 2"));
    quest.push(new Question("Question 3", "answer 1 question 3", "answer 2 question 3", "answer 3 question 3", "answer 4 question 3"));
    quest.push(new Question("Question 4", "answer 1 question 4", "answer 2 question 4", "answer 3 question 4", "answer 4 question 4"));
    quest.push(new Question("Question 5", "answer 1 question 5", "answer 2 question 5", "answer 3 question 5", "answer 4 question 5"));
    quest.push(new Question("Question 6", "answer 1 question 6", "answer 2 question 6", "answer 3 question 6", "answer 4 question 6"));
    quest.push(new Question("Question 7", "answer 1 question 7", "answer 2 question 7", "answer 3 question 7", "answer 4 question 7"));
    quest.push(new Question("Question 8", "answer 1 question 8", "answer 2 question 8", "answer 3 question 8", "answer 4 question 8"));
    quest.push(new Question("Question 9", "answer 1 question 9", "answer 2 question 9", "answer 3 question 9", "answer 4 question 9"));
    quest.push(new Question("Question 10", "answer 1 question 10", "answer 2 question 10", "answer 3 question 10", "answer 4 question 10"));
    



});
