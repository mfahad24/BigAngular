(function() {
        var displayComponent = {
            template: `<p>{{$ctrl.longestToDisplay}} has the longest name!</p>`,
            controller: function(challengeService){
            	var $ctrl = this;
            	$ctrl.longestToDisplay = challengeService.getNames();
            	console.log($ctrl.longestToDisplay);
            }
        }
        angular
            .module("app")
            .component("displayComponent", displayComponent)



})();