app.controller('ChangePasswordController', function ($scope, userService, notifyService, authenticationService, $location) {
    $scope.editPasswordData={};
    $scope.editPassword=function editPassword(data){
        userService.editPassword(data,
            function(data){
                notifyService.showInfo(data.message);
                $location.path('/user/home');
            },
            function(error){
                notifyService.showError(error.message, error);
            }
        )
    }
});
