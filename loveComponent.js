(function() {
    var loveComponent = {
        template: `<form ng-submit="$ctrl.doNames($ctrl.name1, $ctrl.name2);">
  <input type="text" name="name1" placeholder="First Person's Name" ng-model="$ctrl.name1">
  <input type="text" name="name2" placeholder="Second Person's Name" ng-model="$ctrl.name2">
  <button>MATCH</button>
</form>`,
        controller: function(getAPIservice) {
            var $ctrl = this;
            $ctrl.doNames = function (name1, name2){
            	console.log(name1, name2);
            	getAPIservice.setData(name1, name2);
            }
        }
    }















    angular
        .module("app")
        .component("loveComponent", loveComponent);




})();