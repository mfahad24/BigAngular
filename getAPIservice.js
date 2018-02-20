(function() {

    function getAPIservice($http) {
        var displayMatch = {};
        return {
            setData: setData,
            getData: getData
        };

        function setData() {
            return $http({
                method: "GET",
                url: "https://love-calculator.p.mashape.com/getPercentage",
                data: {
                    "param1": param1,
                    "param2": param2
                },
                headers: {
                    "X-Mashape-Key": "6ztBrD7RNbmshbzNlpRGdGnTwkHsp12NtFIjsnKIDYfYN1wo20",
                    "Accept": "application/json"
                }
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