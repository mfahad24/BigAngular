(function() {
    var loveComponent = {
        template: `<form ng-submit="$ctrl.doNames($ctrl.name1, $ctrl.name2);">
  <input type="text" name="name1" placeholder="First Person's Name" ng-model="$ctrl.name1">
  <input type="text" name="name2" placeholder="Second Person's Name" ng-model="$ctrl.name2">
  <button>MATCH</button>
</form>
<div>
  <p>Your match percentage is {{ $ctrl.match.percentage }}! {{$ctrl.match.result}}</p>
</div>`,
        controller: function(getAPIservice) {
            var $ctrl = this;
            $ctrl.doNames = function(name1, name2) {
                getAPIservice.fetchLoveMatch(name1, name2)
                    .then(function(match) {
                        $ctrl.match = match;
                    })
            }

        }

    }

    angular
        .module("app")
        .component("loveComponent", loveComponent);




})();