var app = angular.module('SocialNetwork', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 3);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/register-login-view.html',
        controller: 'RegisterAndLoginController'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'partials/news-feed-view.html',
        controller: 'NewsFeedController'
    });

    $routeProvider.when('/user/password', {
        templateUrl: 'partials/change-password-view.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'partials/edit-profile-view.html',
        controller: 'EditProfileController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authenticationService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf('/user/') != -1 && !authenticationService.isLoggedIn()) {
            $location.path('/');
        }
    });
});



