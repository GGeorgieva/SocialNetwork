app.controller('UserNavigationController', function (
    $scope, authenticationService, $location, userService, notifyService) {
    if(authenticationService.isLoggedIn()){
        userService.getDataAboutMe(function(data){
                $scope.me = data;
            },
            function(error)  {
                console.log(error);
            }
        );
    }

    $scope.logout= function logout() {
        authenticationService.logout(function(data){
                notifyService.showInfo(data.message);
                $location.path("/");
            },
            function(error)  {
                notifyService.showInfo(error.message, error);
                console.log(error);
            }
        );

    }

    $scope.getUserPreview = function (userName){
        userService.getUserPreview(userName, function(data){
                $scope.userPreview = data;
                console.log(data);
            },
            function(error)  {
                notifyService.showError(error.message, error);
            }
        )
    }
});
