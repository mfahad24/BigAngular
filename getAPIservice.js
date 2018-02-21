(function() {

    function getAPIservice($http) {
        var displayMatch = [];
        return {
            fetchLoveMatch: fetchLoveMatch
        };

        function fetchLoveMatch(name1, name2) {
        	displayMatch = [name1, name2];
        	console.log(displayMatch);
            return $http({
                method: "GET",
                url: "https://love-calculator.p.mashape.com/getPercentage",
                params: {
                    "fname": displayMatch[0],
                    "sname": displayMatch[1]
                },
                headers: {
                    "X-Mashape-Key": "6ztBrD7RNbmshbzNlpRGdGnTwkHsp12NtFIjsnKIDYfYN1wo20",
                    "Accept": "application/json"
                }
            }).then(function(response) {
            	return response.data;
            }).catch(function(err) {
            	console.log(err);
            }); 
        }

    }






    angular
        .module("app")
        .factory("getAPIservice", getAPIservice)

})();