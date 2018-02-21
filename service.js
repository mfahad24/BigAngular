(function() {

    function challengeService() {
        var savedNames = [];
        var longest;
        return {
            getNames: getNames,
            sendNames: sendNames
        }

        function sendNames(names) {
            savedNames = names;
            longest = savedNames[0];
            for (var i = 0; i < savedNames.length; i++) {
                if (savedNames[i].length > longest.length) {
                    longest = savedNames[i];
                }
            }
        }

        function getNames() {
            var finish = longest;
            return finish;
        }
    }
    angular
        .module("app")
        .factory("challengeService", challengeService);


})();