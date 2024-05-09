/**
 * represents the in-game header
 */
var GameHeader = function () {
    var self = this;
    this.topContainer = document.createElement("div");

    /**
     * intiates header element
     * 
     * @return {undefined}
     */
    this.init = function () {
        this.topContainer.setAttribute("id", "headerContainer");
        document.getElementById("gameContainer").appendChild(this.topContainer);

        var backBtn = document.createElement("button");
        backBtn.setAttribute("id", "backBtn");
        backBtn.innerHTML = "Exit";

        /**
         * yes and no button
        */
        var yesNoContainer = document.createElement("div");
        yesNoContainer.setAttribute("id", "yesNoContainer");
        var yesBtn = document.createElement("button");
        yesBtn.innerHTML = "Yes";
        yesBtn.addEventListener("click", function () {
            localStorage.clear();
            location.href = "../index.html";

        });
        var noBtn = document.createElement("button");
        noBtn.innerHTML = "No";
        noBtn.addEventListener("click", function () {
            yesNoContainer.remove();

        });
        yesNoContainer.appendChild(yesBtn);
        yesNoContainer.appendChild(noBtn);
        this.topContainer.appendChild(backBtn);
        backBtn.addEventListener("click", function back() {
            self.topContainer.appendChild(yesNoContainer);
        });


        this.displayContinent();
    }

    /**
     * display which content the player is playing
     * 
     * @return {undefined}
     */
    this.displayContinent = function () {
        var continent = document.createElement("h1");
        var str = localStorage.getItem("continent");
        str2 = str.charAt(0).toUpperCase() + str.slice(1);
        continent.innerHTML = str2;

        this.topContainer.appendChild(continent);
    }



}