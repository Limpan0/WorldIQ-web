/**
 * class that requests data from the API
 * and removes all the territories
 */
var MenuGetData = function () {

    /**
     * requests data from API.
     * only requests the data neccessary for the quiz.
     * 
     * @param {string} continent = player-selected continent
     * 
     * @return {undefined}
     */
    this.selectedContinent = function (continent) {
        localStorage.setItem("continent", continent);
        var self = this;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://restcountries.com/v3.1/region/" + continent + "?fields=name,capital,flags,independent", true);
        xmlHttp.send(null);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    self.removeTerritories(xmlHttp.responseText);
                } else {
                    alert("There was a problem getting the flags from the API. Please try again. Status: " + xmlHttp.statusText);
                }
            }
        }

    };

    /**
     * the API also contains territories.
     * this method removes territores from the response
     * so there is only countries left
     * 
     * @param {string} responseText 
     * 
     * @return {undefined}
     */
    this.removeTerritories = function (responseText) {

        var response = JSON.parse(responseText);
        var newArr = [];
        for (let i = 0; i < response.length; i++) {
            if (response[i].independent) {
                newArr.push(response[i]);
            }
        }

        var cRandom = new MenuSelectRandomCountries();
        cRandom.randomCountries(newArr);

    }

}