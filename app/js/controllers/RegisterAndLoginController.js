app.controller('RegisterAndLoginController', function ($scope, $location, authenticationService, userService,notifyService) {
    $scope.login = function login(userData){
           authenticationService.login($scope.userData,
                function(data){
                    notifyService.showInfo("You have successfully logged in!")
                    $location.path('/home');
                },
                function(error){
                    notifyService.showError("Login failed", error);
                    console.log(error);
                }
            );
        },
        $scope.register = function register(userData){
            authenticationService.register($scope.regUserData,
            function(data){
                $location.path('/home');
            },
            function(error){
                notifyService.showError("Register failed", error);
                console.log(error);
            })
        }

});
