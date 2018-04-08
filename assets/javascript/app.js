$(document).ready(function () {

    // $("input[type='submit']").click(function (event) {
    //     if ($("input[type='radio']").is(':checked')) {
    //         console.log($("input[type='radio']:checked").val());
    //     }
    //     event.preventDefault();
    // });
    // //audio to play when the start button is pressed
    var audio = new Audio("./assets/audio/ThundercatsSong.mp3")
   
    window.onload = function() {
        $("#startOfGame").hide();
        $("#resultsDisplay").hide();
        $("#startButton").show();
    }


    $("#startButton").click(function () {
        $("#startButton").on("click", startGame);
        $("#startButton").hide();
        $("#resultsDisplay").hide();
        $("#startOfGame").show();
        audio.play();
    })
    // audio.play();

    function startGame() {
        // counter = setInterval(timerStart, 120000);
        $("#startOfGame").show();
    }

    // function endGame(){

    // }




    startGame();


});



























//variable object array that holds properties for trivia questions
// var questions = [{
//     triviaQuestion: "The original ThunderCats show was animated in:",
//     answersToSelect: ["Japan", "The United States", "France", "India"],
//     correctAnswerIndex: 0
// }]; 

// $("#startButton").on("click", function(){
//     $(this).hide();
//     startGame();
// })

// function startGame(){
//     $("#results").empty();
//     $("#correct").empty();
//     $("#incorrect").empty();
//     $("#unanswered").empty();
// }

// function questionList(){

// }