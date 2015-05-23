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
        authenticationService.logout(function(){
                notifyService.showInfo("You have successfully logged out!");
                $location.path("/");
            },
            function(error)  {
                notifyService.showInfo("Logout failed!", error);
                console.log(error);
            }
        );

    }

    $scope.getUserPreview = function(userName){
        userService.getUserPreview(userName, function(data){
                $scope.userPreview = data;
                console.log(data);
            },
            function(error)  {
                console.log(error);
            }
        )
    }


});
