(function() {

    function getAPIservice($http) {
        var displayMatch = [];
        return {
            setData: setData,
            getData: getData
        };

        function setData(name1, name2) {
        	displayMatch = [name1, name2];
        	console.log(displayMatch);
            return $http({
                method: "GET",
                url: "https://love-calculator.p.mashape.com/getPercentage",
                data: {
                    "fname": displayMatch[0],
                    "sname": displayMatch[1]
                },
                headers: {
                    "X-Mashape-Key": "6ztBrD7RNbmshbzNlpRGdGnTwkHsp12NtFIjsnKIDYfYN1wo20",
                    "Accept": "application/json"
                }
            }).catch(function(err) {
            	console.log(err);
            }); 
        }

        function getData() {
            return displayMatch;
        }

    }






    angular
        .module("app")
        .factory("getAPIservice", getAPIservice)

})();