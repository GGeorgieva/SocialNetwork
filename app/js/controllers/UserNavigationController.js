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

    //search users
    $scope.searchUser=function searchUser(searchTerm){
        userService.searchUsersByName(searchTerm,
            function (data) {
                console.log(data);
                var dataList = document.getElementById('json-datalist');
                var input = document.getElementById('ajax');
                data.forEach(function(person) {
                        var option = document.createElement('option');
                        option.value = person.name;
                        dataList.appendChild(option);
                })
            },
            function(error){
                notifyService.showError(error.message,error);
            }
        )
    }
});
