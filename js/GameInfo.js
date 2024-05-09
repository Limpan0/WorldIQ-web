
/**
 * contains diffrent information about the game.
 * like: question counter, score counter, the difficulty, the end score-screen and information if the timer runs out.
*/
var GameInfo = function () {

    this.infoContainer = document.createElement("div");
    this.questionDisplay = document.createElement("h1");
    this.scoreDisplay = document.createElement("h1");
    var qNr = localStorage.getItem("questionNr");

    /**
     * initiates the info methods
     * 
     * @return {undefined}
     */
    this.init = function () {
        this.infoContainer.setAttribute("id", "infoContainer");
        document.getElementById("gameContainer").appendChild(this.infoContainer);

        this.questionCounter();
        this.scoreCounter();
        this.difficulty();
    }

    /**
     * displays current and total questions
     * 
     * @return {undefined}
     */
    this.questionCounter = function () {
        this.infoContainer.appendChild(this.questionDisplay);
        this.questionDisplay.innerHTML = "Question:<br>";
        this.questionDisplay.innerHTML = "Question:<br>" + (+qNr + 1) + " / 8";
    }

    /**
     * displays current score
     * 
     * @return {undefined}
     */
    this.scoreCounter = function () {
        this.infoContainer.appendChild(this.scoreDisplay);
        this.scoreDisplay.innerHTML = "Points:<br>";

        var score = localStorage.getItem("score");

        this.scoreDisplay.innerHTML = "Points:<br>" + score;
    }

    /**
     * display current difficulty
     * 
     * @return {undefined}
     */
    this.difficulty = function () {
        var difficulty = localStorage.getItem("difficulty");
        var difficultyDisplay = document.createElement("h1");
        this.infoContainer.appendChild(difficultyDisplay);
        difficultyDisplay.innerHTML = "Difficulty:<br>";
        if (difficulty == "d0") {
            difficultyDisplay.innerHTML += "Easy";
        }
        else if (difficulty == "d1") {
            difficultyDisplay.innerHTML += "Medium";
        }
        else if (difficulty == "d2") {
            difficultyDisplay.innerHTML += "Hard";
        }

    }

    /**
     * displays the score after the game
     * 
     * @return {undefined}
     */
    this.endInfoBox = function () {

        document.getElementById("loading").style.display = "none";


        var gameContainer = document.getElementById("gameContainer");
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.firstChild);
        };

        var infoBox = document.createElement("div");
        infoBox.setAttribute("class", "infoBoxContainer");
        infoBox.setAttribute("id", "endBox");
        infoBox.innerHTML = "Final score: " + localStorage.getItem("score") + " / " + (+localStorage.getItem("questionNr") + 1) + "<hr>";
        var nextQBtn = document.createElement("button");
        nextQBtn.setAttribute("class", "nextQBtn");
        nextQBtn.innerHTML = "Back to start";

        gameContainer.appendChild(infoBox);
        infoBox.appendChild(nextQBtn);
        nextQBtn.addEventListener("click", function () {
            location.href = "../index.html";
            localStorage.clear();
        })
    }

    /**
     * displays information when the player is to slow to answer
     * 
     * @return {undefined}
     */
    this.outOfTime = function () {
        var buzzer = new Audio('../sound/wrong.mp3');
        buzzer.volume = 0.3;
        buzzer.play();

        var timeOutContainer = document.createElement("div");
        timeOutContainer.setAttribute("class", "outOfTime");
        timeOutContainer.innerHTML = "<h1> You ran out of time... </h1><h3> Gotta be faster for the next one!</h3>";

        var nextQBtn = document.createElement("button");
        nextQBtn.setAttribute("class", "nextQBtn");
        nextQBtn.innerHTML = "Next Question";

        //disable answer buttons
        var buttons = document.getElementById("answerContainer");
        buttons = buttons.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.opacity = "0.6";
        }

        document.getElementById("answerContainer").appendChild(timeOutContainer);
        timeOutContainer.appendChild(nextQBtn);
        nextQBtn.addEventListener("click", function () {
            GameStart.newQuestion();
        });
    }

}