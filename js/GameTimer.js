/**
 * represents the ingame timer for each question
 */
var GameTimer = function () {

    var info = new GameInfo();
    this.timerContainer = document.createElement("div");
    this.timerContainer.setAttribute("id", "timerContainer");
    document.getElementById("answerContainer").appendChild(this.timerContainer);

    /**
     * checks what difficulty is selected
     * 
     * @return {undefined}
     */
    this.init = function () {
        var dif = localStorage.getItem("difficulty");
        if (dif == "d0") {
            this.easy();
        }
        else if (dif == "d1") {
            this.medium();
        }
        else if (dif == "d2") {
            this.hard();
        }

    }

    /**
     * adjust the game to easy
     * 
     * @return {undefined}
     */
    this.easy = function () {
        this.timerContainer.setAttribute("class", "timer20");

        let timerId = setTimeout(() => {
            info.outOfTime();
        }, 20000);
        localStorage.setItem("timer", timerId);
    }

    /**
     * adjust the game to medium
     * 
     * @return {undefined}
     */
    this.medium = function () {
        this.timerContainer.setAttribute("class", "timer15");

        let timerId = setTimeout(() => {
            info.outOfTime();
        }, 15000);
        localStorage.setItem("timer", timerId);
    }

    /**
     * adjust the game to hard
     * 
     * @return {undefined}
     */
    this.hard = function () {
        this.timerContainer.setAttribute("class", "timer10");

        let timerId = setTimeout(() => {
            info.outOfTime();
        }, 10000);
        localStorage.setItem("timer", timerId);
    }
}