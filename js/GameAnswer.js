/**
 * represents the answers in-game
 * also handels the answers in diffrent ways depending on the answer, if it is correct or not
 */
var GameAnswer = function () {

    this.answerContainer = document.createElement("div");

    var questionNr = localStorage.getItem("questionNr");
    var cCorrect = JSON.parse(localStorage.getItem('cCorrectString'));
    var cCorrectName = cCorrect[questionNr].name.common;
    /**
     * the correct country and random countries for 
     * the other alternatives
     * 
     * @return {undefined}
    */
    this.init = function () {
        var self = this;

        this.answerContainer.setAttribute("id", "answerContainer");
        document.getElementById("gameContainer").appendChild(this.answerContainer);
        var cRandomArray = JSON.parse(localStorage.getItem('cRandomString'));

        //get the right amount of questions.
        var nrOfAnswers;
        if (localStorage.getItem("difficulty") === "d0") {
            nrOfAnswers = 4;
        } else nrOfAnswers = 6;

        /**
         * Create buttons with one correct answer
        */
        var cRandomArrayCopy = cRandomArray;
        var r = Math.floor(Math.random() * nrOfAnswers);
        for (let i = 0; i < nrOfAnswers; i++) {
            var answerElem = document.createElement("button");
            answerElem.setAttribute("class", "answerBtns");

            if (i == r) {
                answerElem.innerHTML = cCorrectName;
                answerElem.setAttribute("name", "correct");
            } else {
                let r = Math.floor(Math.random() * cRandomArrayCopy.length);
                var randomName = cRandomArrayCopy[r].name.common;
                cRandomArrayCopy.splice(r, 1);
                answerElem.innerHTML = randomName;
                answerElem.setAttribute("name", "wrong");
            }

            this.answerContainer.appendChild(answerElem);

            answerElem.addEventListener("click", function () {

                //remove timer
                clearTimeout(localStorage.getItem("timer"));

                self.handleAnswer(this);

            });
        };

    };

    /**
     * checks if the answer is correct or not 
     * and handle the game accordingly
     * 
     * @param {object} answer 
     */
    this.handleAnswer = function (answer) {
        var displayAnswer = document.createElement("div");
        displayAnswer.setAttribute("class", "displayAnswerContainer");
        var nextQBtn = document.createElement("button");
        nextQBtn.setAttribute("class", "nextQBtn");
        nextQBtn.innerHTML = "Next Question";

        if (questionNr == "7") {
            nextQBtn.innerHTML = "End Quiz";
        }

        var score = localStorage.getItem("score");

        var dingSound = new Audio('../sound/correct.mp3');
        var buzzer = new Audio('../sound/wrong.mp3');
        buzzer.volume = 0.2;
        var allBtns = answer.parentElement;
        if (answer.name === "correct") {
            dingSound.play();
            answer.style.backgroundColor = "green";
            displayAnswer.style.color = "rgb(56, 176, 60)";
            displayAnswer.innerHTML = "Well done, that is the correct answer! <br> You get +1 points!";
            score++;
            localStorage.setItem("score", score);
        } else {
            buzzer.play();
            answer.style.animation = "shake 0.2s 2";
            answer.style.backgroundColor = "red";
            displayAnswer.style.color = "rgb(163, 44, 44)";
            displayAnswer.innerHTML = "I'm sorry, that is not the correct answer. <br> You get 0 points. <br> Correct answer: " + cCorrectName;
        }


        for (let i = 0; i < allBtns.children.length; i++) {
            allBtns.children[i].disabled = true;
            allBtns.children[i].style.opacity = "0.6";
            if (allBtns.children[i].name === "correct") {
                allBtns.children[i].style.backgroundColor = "green";
                allBtns.children[i].style.animation = "pulse 1s ease-in-out";

            }
        }

        allBtns.prepend(displayAnswer);
        displayAnswer.appendChild(nextQBtn);
        nextQBtn.addEventListener("click", function () {
            GameStart.newQuestion();
        });

    };

} 
