/**
 * represents the hint and the flag  
 */
var GameHint = function () {

    var questionNr = localStorage.getItem("questionNr");
    var cCorrect = JSON.parse(localStorage.getItem('cCorrectString'));
    var cCorrectFlag = cCorrect[questionNr].flags.svg;

    this.hintContainer = document.createElement("div");
    this.hintContainer.setAttribute("id", "hintContainer");
    document.getElementById("gameContainer").appendChild(this.hintContainer);

    /**
     * checks if the game should contain hints 
     * and initiates displayFlag
     * 
     * @return {undefined}
     */
    this.init = function () {


        //Only Easy get hints
        if (localStorage.getItem("difficulty") == "d0" || localStorage.getItem("difficulty") == "d1") {
            this.hintContainer.innerHTML = "<i id='hint'class='fa-solid fa-circle-question'><p id='capital'>Capital:<br>" + cCorrect[questionNr].capital + "</p></i>";
            var hint = document.getElementById("hint");
            hint.addEventListener("mouseover", this.hintCapital);
            hint.addEventListener("mouseleave", this.hintCapital);
        }

        //Här ska olika hints väljas sen
        this.displayFlag();
    }

    /**
     * shows the capital as a hint on hover
     * 
     * @param {event} event 
     * 
     * @return {undefined}
     */
    this.hintCapital = function (event) {
        var capital = document.getElementById("capital");
        if (event.type == "mouseover") {
            capital.style.display = "flex";
        } else capital.style.display = "none";

    }

    /**
     * displays the flag in the container
     * 
     * @return {undefined}
     */
    this.displayFlag = function () {
        this.hintElem = document.createElement("img");
        this.hintElem.setAttribute("src", cCorrectFlag);
        this.hintContainer.appendChild(this.hintElem);

        //the timer doesnt start until the flag is displayed
        this.hintElem.onload = () => {
            document.getElementById("loading").style.display = "none";
            var timer = new GameTimer();
            timer.init();
        }
    }
} 