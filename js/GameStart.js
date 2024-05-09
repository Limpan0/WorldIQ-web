/**
 * main class for the game-screen
 * initializes the diffrent classes used in the quiz
 */
var GameStart = {

    /**
     * intiate-method
     * 
     * @returns {undefined}
     */
    init: function () {
        localStorage.setItem("score", 0);
        GameStart.newQuestion();


    },

    /**
     * generates the next question
     * 
     * @returns {undefined}
     */
    newQuestion: function () {

        var qAmount = 7; //7 = 8 questions
        
        var score = new GameInfo();

        if (qAmount == localStorage.getItem("questionNr")) {
            score.endInfoBox();

            return;

        } else {

            if (qNr = localStorage.getItem("questionNr")) {
                qNr++;
                localStorage.setItem("questionNr", qNr);
            } else {
                var qNr = 0;
                localStorage.setItem("questionNr", qNr);
            }

        }

        var gameContainer = document.getElementById("gameContainer");
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.firstChild);
        };

        var header = new GameHeader();
        header.init();

        var question = new GameQuestion();
        question.init();

        var hint = new GameHint();
        hint.init();

        score.init();

        var answer = new GameAnswer();
        answer.init();

    }

}

window.addEventListener("load", GameStart.init);