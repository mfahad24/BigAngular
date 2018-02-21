(function() {
  var challengeComponent = {
    template: `<p>You want to see which of your friends has the longest name? You do?! Well, enter them all here and find out:</p>
    <form ng-submit="$ctrl.nameInputs()">
    <input type="text" ng-model="$ctrl.names[0]" placeholder="First Friend">
    <input type="text" ng-model="$ctrl.names[1]" placeholder="Second Friend">
    <input type="text" ng-model="$ctrl.names[2]" placeholder="Third Friend">
    <input type="text" ng-model="$ctrl.names[3]" placeholder="Fourth Friend">
    <input type="text" ng-model="$ctrl.names[4]" placeholder="Fifth Friend">
      <button>More Inputs!</button>
      <button>Submit Your Names</button>
      </form>`,
    controller: function(challengeService) {
      var $ctrl = this;
      $ctrl.names = [];
      $ctrl.nameInputs = function() {
        challengeService.sendNames($ctrl.names);
      }
    }
  }

  angular
    .module("app")
    .component("challengeComponent", challengeComponent);




})();
