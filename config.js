(function () {

	angular
	.module("app")
	.config(function($routeProvider){
		$routeProvider
		.when("/love", {
			template: "<love-component></love-component>"
		})
		.when("/longest", {
			template: "<component></component>"
		})
		.otherwise({redirectTo: "/love"});
	});

})();