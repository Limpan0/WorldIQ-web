/**
 * represents the menu when the user chooses difficulty
 */
var MenuSelectDifficulty = function () {

    /**
     * creates the different elements for the difficulty options
     * 
     * @return {undefined}
     */
    this.optionsContainer = function () {
        //Container Div
        var optionsContainer = document.createElement("div");
        optionsContainer.setAttribute("id", "optionsContainer");
        document.getElementById("body").appendChild(optionsContainer);


        //Title header
        var title = document.createElement("h1");
        title.setAttribute("id", "title");
        title.innerHTML = "Select difficulty";
        optionsContainer.appendChild(title);

        //Close div button
        var close = document.createElement("button");
        close.setAttribute("class", "btn");
        close.setAttribute("id", "closeBtn");
        close.innerHTML = "<- back";
        close.addEventListener("click", function () {
            for (let i = 0; i < MenuMain.btns.length; i++) {

                MenuMain.btns[i].disabled = false;
            }
            while (optionsContainer.firstChild) {
                optionsContainer.removeChild(optionsContainer.firstChild);
                optionsContainer.remove();
            };

        })
        optionsContainer.appendChild(close);

        //Option buttons
        var btnList = document.createElement("div");
        btnList.setAttribute("id", "btnList");
        optionsContainer.appendChild(btnList);

        for (let i = 0; i < 3; i++) {
            var option = document.createElement("input");
            option.setAttribute("type", "radio");
            option.setAttribute("name", "difficulty");
            option.setAttribute("id", "d" + [i]);

            var label = document.createElement("label");
            label.setAttribute("for", "d" + [i]);

            btnList.appendChild(option);
            btnList.appendChild(label);
        }

        for (let i = 0; i < btnList.children.length; i++) {
            if (btnList.children[i].getAttribute("for") == "d0") {
                btnList.children[i - 1].setAttribute("checked", "true");
                btnList.children[i].innerHTML = "<b>Easy</b> <br> 4 options | hint (the capital) | 20 seconds to answer";
            }
            else if (btnList.children[i].getAttribute("for") == "d1") {
                btnList.children[i].innerHTML = "<b>Medium</b> <br> 6 options | hint (the capital) | 15 seconds to answer";
            }
            else if (btnList.children[i].getAttribute("for") == "d2") {
                btnList.children[i].innerHTML = "<b>Hard</b> <br> 6 options | no hint | 10 seconds to answer";
            }
        }

        //Start button and set localstorage difficulty
        var nextQBtn = document.createElement("button");
        nextQBtn.setAttribute("class", "btn");
        nextQBtn.innerHTML = "Start game!";

        optionsContainer.appendChild(nextQBtn);
        nextQBtn.addEventListener("click", function () {
            for (let i = 0; i < btnList.children.length; i++) {
                if (btnList.children[i].checked) {
                    localStorage.setItem("difficulty", btnList.children[i].id);
                    //fixa timer och antal allternativ beroende på val
                }
            }

            //go to game side
            location.href = "./html/questionPage.html";
        })
    }
}