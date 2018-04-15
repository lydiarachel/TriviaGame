//Global variables
//Timer count variable
var countDown = 60;

// //audio to play when the start button is pressed
var audio = new Audio("./assets/audio/ThundercatsSong.mp3")

//variables for number of correct, incorrect, unanswered
var correctAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;

$(document).ready(function () {

    //start of game hide questions and results
    $("#startOfGame").hide();
    $("#resultsDisplay").hide();

    //start button function to show the trivia game on click and hide the start button
    $("#startButton").on("click", function () {
        $("#startButton").hide();

        $("#startOfGame").show();
        audio.play();
        timerCountDown();
        userSelections();
        return;
    })

    //timer display
    function timer() {
        //decrements the timer from 60 seconds
        countDown--;

        //diplays the actual time left in seconds
        $("#actualTimeLeft").text(countDown + " seconds");

        //if the user gets all of the answers before time is up

        //if the timer runs out
        if (countDown == 0) {

            //function to be called once the time is up and it's time to get the answers
            roundUpTime();
            //this stops the timer from going on for-ev-er (like in Sandlot tee hee he)
            clearInterval(timerStop);
        }

    }

    var timerStop;
    //function for the timer interval as one second
    function timerCountDown() {
        //setting a variable equal to the set interval time so that it can be stopped, instead of just hidden
        timerStop = setInterval(timer, 1000);
    }

    function roundUpTime() {
        //when rounduptime function called, hide the questions and display the results
        $("#startOfGame").hide();
        $("#resultsDisplay").show();
    }

    function userSelections() {
        // select the radio by its id
        
        $(".numOne").on("change", function () { // bind a function to the change event
            if ($("input[type='radio'].numOne").is(":checked")) {
                // check if the radio is checked
                var val = $("input[type='radio'].numOne:checked").val(); // retrieve the value
            }
            console.log(val);
            var answer = $("#rightAnswer").val();
            console.log(answer);
            if (val == undefined) {
                notAnswered++;
            } else if (val == answer) {
                correctAnswer++;
            } else {
                wrongAnswer++;
            }
            console.log(correctAnswer);
        })

    }
})

$(".submit").on("click", function () {
    $("#startOfGame").hide();
    $("#resultsDisplay").show();

    //displaying the results
    $("#correct").text("Correct Answers : " + correctAnswer);
    $("#incorrect").text("Wrong Answers : " + wrongAnswer);
    $("#unanswered").text("Unanswered : " + notAnswered);

});