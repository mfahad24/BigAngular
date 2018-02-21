(function() {

  function challengeService() {
    var savedNames = [];
    return {
      getNames: getNames,
      sendNames: sendNames
    }

    function sendNames(names) {
      savedNames = names;
			console.log(savedNames);
			var longest = savedNames[0];
			savedNames.forEach(function(name){
				if (name.length > longest.length) {
					longest = name;
				}
			})
			return longest;
    }

    function getNames() {
      return savedNames;

    }
  }
  angular
    .module("app")
    .factory("challengeService", challengeService);


})();
