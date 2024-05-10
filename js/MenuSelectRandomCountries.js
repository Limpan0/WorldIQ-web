/**
 * randomized the countries and selects the 
 * correct ones for the quiz
 */
var MenuSelectRandomCountries = function () {

    this.cRandomArray = [];

    /**
     * randomize the countries
     * 
     * @param {object} countries 
     * @return {undefined}
     */
    this.randomCountries = function (countries) {
        var countriesJSONCopy = countries;
        var cLength = countriesJSONCopy.length;
        for (let i = 0; i < cLength; i++) {
            var r = Math.floor(Math.random() * countriesJSONCopy.length);
            var cName = countriesJSONCopy[r];
            this.cRandomArray.push(cName);
            countriesJSONCopy.splice(r, 1);

        }
        this.selectCorrectCountry();
    }


    /**
     * select 8 correct countries for the quiz
     * 
     * @return {undefined}
     */
    this.selectCorrectCountry = function () {

        //select correct countries for the quiz and remove them from random array
        var cCorrectArr = [];
        for (let i = 0; i <= 8; i++) {
            var pop = this.cRandomArray.pop();
            cCorrectArr.push(pop);
        }

        localStorage.setItem('cCorrectString', JSON.stringify(cCorrectArr));

        localStorage.setItem('cRandomString', JSON.stringify(this.cRandomArray));


    }
}
