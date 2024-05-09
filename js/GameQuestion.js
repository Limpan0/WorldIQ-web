/**
 * represents the question element in the game
 */
var GameQuestion = function () {

    /**
     * creates element and initiates question
     * 
     * @return {undefined}
     */
    this.init = function () {
        var self = this;
        this.questionContainer = document.createElement("div");
        this.questionContainer.setAttribute("id", "questionContainer");
        document.getElementById("gameContainer").appendChild(this.questionContainer);

        //Här ska olika frågor väljas sen
        self.question();
    }

    /**
     * displays the question
     * 
     * @return {undefined}
     */
    this.question = function () {
        this.questionElem = document.createElement("h2");
        this.questionElem.innerHTML = "What country does the flag belong to?";
        this.questionContainer.appendChild(this.questionElem);

    }



} 