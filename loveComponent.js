(function() {
    var loveComponent = {
        template: `<form ng-submit="$ctrl.doNames($ctrl.words);">
  <input type="text" name="name1" placeholder="First Person's Name" ng-model="$ctrl.name1">
  <input type="text" name="name2" placeholder="Second Person's Name" ng-model="$ctrl.name2">
  <button>MATCH</button>
</form>`,
        controller: function(getAPIservice) {
            var $ctrl = this;
            $ctrl.doNames = function (names){
            	console.log(names);
            	getAPIservice.setData(names);
            }
        }
    }















    angular
        .module("app")
        .component("loveComponent", loveComponent);




})();