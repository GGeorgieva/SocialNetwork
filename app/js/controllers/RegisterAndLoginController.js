app.controller('RegisterAndLoginController', function ($scope, $location, authenticationService, userService, notifyService) {
    $scope.login = function login(userData){
           authenticationService.login(userData,
                function(){
                    notifyService.showInfo("You have successfully logged in!");
                    $location.path('/user/home');
                },
                function(error){
                    notifyService.showError("Login failed", error);
                    console.log(error);
                }
            );
        },
        $scope.register = function register(userData){
            authenticationService.register(userData,
            function(data){
                notifyService.showInfo("You have successfully registered!");
                $location.path('/user/home');
            },
            function(error){
                notifyService.showError("Registration failed", error);
                console.log(error);
            })
        }

});
