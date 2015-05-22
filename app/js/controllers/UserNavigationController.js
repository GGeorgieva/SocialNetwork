app.controller('UserNavigationController', function ($scope, authenticationService, $location, userService) {
    userService.getDataAboutMe(function(data){
            $scope.me = data;
        },
        function(error)  {
            console.log(error);
        }
    );

    $scope.logout= function logout() {
        authenticationService.logout();
        $location.path("/");
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
