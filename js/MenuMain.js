/**
 * Main class, initiates other classes
 */
var MenuMain = {

    btns: document.getElementsByClassName("continentBtn"),

    /**
     * checks if user is online and starts GetData.js
     * 
     */
    init: function () {

        navigator.onLine ? "" : alert("It seems like you are offline, you need internet connection to use this app the intended way.");

        var getData = new MenuGetData();
        var difficulty = new MenuSelectDifficulty();

        for (let i = 0; i < MenuMain.btns.length; i++) {
            MenuMain.btns[i].addEventListener("click", function () {
                getData.selectedContinent(MenuMain.btns[i].name);
                difficulty.optionsContainer();
                for (let j = 0; j < MenuMain.btns.length; j++) {
                    MenuMain.btns[j].disabled = true;
                }

            })
        }
    },


}

window.addEventListener("load", MenuMain.init);