const score = [];
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");
const answer7 = document.getElementById("answer7");
const answer8 = document.getElementById("answer8");
const answer9 = document.getElementById("answer9");
const answer10 = document.getElementById("answer10");
const answer11 = document.getElementById("answer11");
const answer12 = document.getElementById("answer12");
const answer13 = document.getElementById("answer13");
var defaultColor = "rgba(46, 46, 46, 0.5)";
var question1;
var question2;
var question3;
var question4;
        function startTest(){
            var start = document.getElementById("startButton");
            var questions = document.getElementById("questionBox");
            start.style.display = "none";
            questions.style.display = "block";
        }

        function answer1Button(){
            question1 = "A";
            if (answer1.style.backgroundColor === "green"){
                answer1.style.backgroundColor = defaultColor;
                
            } else {
                answer1.style.backgroundColor = "green"
                answer2.style.backgroundColor = defaultColor;
                answer3.style.backgroundColor = defaultColor;
            }
        }
        function answer2Button(){
            question1 = "B";
            if (answer2.style.backgroundColor === "green"){
                answer2.style.backgroundColor = defaultColor;
            } else {
                answer1.style.backgroundColor = defaultColor;
                answer2.style.backgroundColor = "green";
                answer3.style.backgroundColor = defaultColor;
            }
        }
        function answer3Button(){
            question1 = "C";
            if (answer3.style.backgroundColor === "green"){
                answer3.style.backgroundColor = defaultColor;
            } else {
                answer1.style.backgroundColor = defaultColor;
                answer2.style.backgroundColor = defaultColor;
                answer3.style.backgroundColor = "green";
            }
        }
        function answer4Button(){
            question2 = "A";
            if (answer4.style.backgroundColor === "green"){
                answer4.style.backgroundColor = defaultColor;
            } else {
                answer4.style.backgroundColor = "green";
                answer5.style.backgroundColor = defaultColor;
                answer6.style.backgroundColor = defaultColor;
            }
        }
        function answer5Button(){
            question2 = "C";
            if (answer5.style.backgroundColor === "green"){
                answer5.style.backgroundColor = defaultColor;
            } else {
                answer4.style.backgroundColor = defaultColor;
                answer5.style.backgroundColor = "green";
                answer6.style.backgroundColor = defaultColor;
            }
        }
        function answer6Button(){
            question2 = "B";
            if (answer6.style.backgroundColor === "green"){
                answer6.style.backgroundColor = defaultColor;
            } else {
                answer4.style.backgroundColor = defaultColor;
                answer5.style.backgroundColor = defaultColor;
                answer6.style.backgroundColor = "green";
            }
        }
        function answer7Button(){
            question3 = "A";
            if (answer7.style.backgroundColor === "green"){
                answer7.style.backgroundColor = defaultColor;
            } else {
                answer7.style.backgroundColor = "green";
                answer8.style.backgroundColor = defaultColor;
                answer9.style.backgroundColor = defaultColor;
            }
        }
        function answer8Button(){
            question3 = "B";
            if (answer8.style.backgroundColor === "green"){
                answer8.style.backgroundColor = defaultColor;
            } else {
                answer7.style.backgroundColor = defaultColor;
                answer8.style.backgroundColor = "green";
                answer9.style.backgroundColor = defaultColor;
            }
        }
        function answer9Button(){
            question3 = "C";
            if (answer9.style.backgroundColor === "green"){
                answer9.style.backgroundColor = defaultColor;
            } else {
                answer7.style.backgroundColor = defaultColor;
                answer8.style.backgroundColor = defaultColor;
                answer9.style.backgroundColor = "green";
            }
        }
        function answer10Button(){
            question4 = "C";
            if (answer10.style.backgroundColor === "green"){
                answer10.style.backgroundColor = defaultColor;
            } else {
                answer10.style.backgroundColor = "green";
                answer11.style.backgroundColor = defaultColor;
                answer12.style.backgroundColor = defaultColor;
                answer13.style.backgroundColor = defaultColor;
            }
        }
        function answer11Button(){
            question4 = "A";
            if (answer11.style.backgroundColor === "green"){
                answer11.style.backgroundColor = defaultColor;
            } else {
                answer10.style.backgroundColor = defaultColor;
                answer11.style.backgroundColor = "green";
                answer12.style.backgroundColor = defaultColor;
                answer13.style.backgroundColor = defaultColor;
            }
        }
        function answer12Button(){
            question4 = "B";
            if (answer12.style.backgroundColor === "green"){
                answer12.style.backgroundColor = defaultColor;
            } else {
                answer10.style.backgroundColor = defaultColor;
                answer11.style.backgroundColor = defaultColor;
                answer12.style.backgroundColor = "green";
                answer13.style.backgroundColor = defaultColor;
            }
        }
        function answer13Button(){
            question4 = "B";
            if (answer13.style.backgroundColor === "green"){
                answer13.style.backgroundColor = defaultColor;
            } else {
                answer10.style.backgroundColor = defaultColor;
                answer11.style.backgroundColor = defaultColor;
                answer12.style.backgroundColor = defaultColor;
                answer13.style.backgroundColor = "green";
            }
        }
        function endTest(){
            var start = document.getElementById("startButton");
            var questions = document.getElementById("questionBox");
            var guardians = document.getElementById("guardians");
            var marksmen = document.getElementById("marksmen");
            var antiArmor = document.getElementById("antiArmor");

            if (
                answer1.style.backgroundColor === "green" ||
                answer2.style.backgroundColor === "green" ||
                answer3.style.backgroundColor === "green" 
                ){
                    if(
                        answer4.style.backgroundColor === "green" ||
                        answer5.style.backgroundColor === "green" ||
                        answer6.style.backgroundColor === "green" 
                    ){
                        if(
                            answer7.style.backgroundColor === "green" ||
                            answer8.style.backgroundColor === "green" ||
                            answer9.style.backgroundColor === "green" 
                        ){
                            if(
                                answer10.style.backgroundColor === "green" ||
                                answer11.style.backgroundColor === "green" ||
                                answer12.style.backgroundColor === "green" ||
                                answer13.style.backgroundColor === "green" 
                            ){
                                questions.style.display = "none";
                                let a = 0;
                                let b = 0;
                                let c = 0;
                                var finalAnswers = [question1, question2, question3, question4];
                                for (let i = 0; i < finalAnswers.length; i++) {
                                    if(finalAnswers[i] === "A"){
                                        a++;
                                    }
                                    if(finalAnswers[i] === "B"){
                                        b++;
                                    }
                                    if(finalAnswers[i] === "C"){
                                        c++;
                                    }
                                }
                                if (a >= 3){
                                    marksmen.style.display = "block";
                                    questions.style.display = "none";
                                }
                                if (b >= 3){
                                    guardians.style.display = "block";
                                    questions.style.display = "none";
                                }
                                if (c >= 3){
                                    antiArmor.style.display = "block";
                                    questions.style.display = "none";
                                }
                                if (a >= 2){
                                    marksmen.style.display = "block";
                                }
                                if (b >= 2){
                                    guardians.style.display = "block";
                                }
                                if (c >= 2){
                                    antiArmor.style.display = "block";
                                }
                                /*
                                document.getElementById("squadFinalA").innerHTML = a;
                                document.getElementById("squadFinalB").innerHTML = b;
                                document.getElementById("squadFinalC").innerHTML = c;
                                document.getElementById("squadFinalT").innerHTML = finalAnswers;
                                */
                            }
                        }
                    }
                }
        }