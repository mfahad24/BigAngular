(function () {

	angular
	.module("app")
	.config(function($routeProvider){
		$routeProvider
		.when("/love", {
			template: "<love-component></love-component>"
		})
		.when("/longest", {
			template: "<challenge-component></challenge-component>"
		})
		.when("/display", {
			template: "<display-component></display-component>"
		})
		.otherwise({redirectTo: "/love"});
	});

})();