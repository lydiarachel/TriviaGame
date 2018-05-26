//hide start button at beggining of game
$('#start').on('click', function () {
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

$(document).on('click', '#reset', function(){
    game.reset();
})
//questions placed in an object array 
var questions = [{
    question: "The animated television series named ThunderCats, had a running from",
    answers: ["2001-2005", "1950-1955", "1985-1989", "2008-2009"],
    correctAnswer: "1985-1989",
    image: "assets/images/thundercats_red.jpg"
}, {
    question: "The original ThunderCats show was animated in: ",
    answers: ["Japan", "The United States", "France", "India"],
    correctAnswer: "Japan",
    image: "assets/images/giphythunder.gif"
}, {
    question: "True or False: Beginning in 2002, Thundercats titles were published by Windstorm Productions, an imprint of DC Comics. ",
    answers: ["True", "False"],
    correctAnswer: "True",
    image: "assets/images/triviapic.jpg"
}, {
    question: "How fast could Cheetera run?",
    answers: ["120 miles per hour", "80 miles per hour", "150 miles per hour", "100 miles per hour"],
    correctAnswer: "120 miles per hour",
    image: "assets/images/triviapic5.jpg"
}, {
    question: "What was Mongor's weapon?",
    answers: ["Cro-bar", "Scythe", "Axe", "Knives"],
    correctAnswer: "Scythe",
    image: "assets/images/mongor.jpg"
}, {
    question: "What was the name of Lion-O's father?",
    answers: ["Cougaro", "Davide", "Siam", "Claudus"],
    correctAnswer: "Claudus",
    image: "assets/images/claudus.jpg"
}, {
    question: "What was Panthro an expert in?",
    answers: ["Chess", "Martial Arts", "Physics", "Nunchuck Skills"],
    correctAnswer: "Martial Arts",
    image: "assets/images/panthro.jpg"
}, {
    question: "What was Tygra's weakness?",
    answers: ["allergies", "scared of the dark", "couldn't swim", "wrinkles"],
    correctAnswer: "couldn't swim",
    image: "assets/images/tygra.jpg"
}, {
    question: "What was the name of the leader of the Berserkers?",
    answers: ["Ram-Bam", "Punisher", "Crusty", "Captain Hammerhand"],
    correctAnswer: "Captain Hammerhand",
    image: "assets/images/Berserkers.jpg"
}, {
    question: "Which StarWars character is Jaga sometimes compared to?",
    answers: ["Leia", "Obi-Wan", "Hans Solo", "Jaba the Hut"],
    correctAnswer: "Obi-Wan",
    image: "assets/images/jaga.jpg"
}];

//game object that will hold questions array, what current question is displaying, counter, and keep track of correct & incorrect
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    // all the methods for this trivia game
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time UP!");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html('<h2> Time Remaining: <span id= "counter">30</span> seconds</h2>');
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '<h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id=button- ' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function () {
        //stops the timer, then subwrapper tells us we are out of time
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>Out of Time!<h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>')
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000)
        }
    },
    results: function () {
        clearInterval(timer);
        $('#subwrapper').html('<h2> Sword Of Omens, give me sight BEYOND sight. </h2>');
        $('#subwrapper').append('<h3>Correct: ' + game.correct + '</h3>');
        $('#subwrapper').append('<h3>Incorrect: ' + game.incorrect + '</h3>')
        $('#subwrapper').append('<h3>Unanswered: ' + game.unanswered + '</h3>')
        $('#subwrapper').append('<button id = "reset"> RESET </button>');
    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        console.log("You Got it!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> Thunder... thunder - thunder - THUNDERCATS, HOOOOOOOOOOOO!</h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000)
        }
    },
    answeredIncorrectly: function () {
        console.log("epic fail!");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2> Ancient spirits of evil, transform this decayed form to MUMM-RA, THE EVER-LIVING!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>')
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000)
        }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }

}