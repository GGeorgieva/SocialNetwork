app.controller('UserNavigationController', function (
    $scope, $location, authenticationService, userService, notifyService){
    $scope.authenticationService = authenticationService;
    $scope.requestDetailsPopover = {
        templateUrl: 'templates/requestDetails.html'
    };

    $scope.logout = function logout() {
        authenticationService.logout(function(data){
                $scope.me={};
                notifyService.showInfo(data.message);
                $location.path("/");
            },
            function(error)  {
                notifyService.showInfo(error.message, error);
                $location.path('/');
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
    $scope.searchUser = function searchUser(searchTerm){
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

    $scope.approveFriendRequest = function approveFriendRequest(userName){
        userService.approveFriendRequest(userName,
            function(data){
                notifyService.showInfo(data.message);
                $location.path("/user/home");
            },
            function(error){
                notifyService.showError(error.message,error);
            }
        )
    }

    $scope.rejectFriendRequest = function rejectFriendRequest(userName){
        userService.rejectFriendRequest(userName,
            function(data){
                notifyService.showInfo(data.message);
                $location.path("/user/home");
            },
            function(error){
                notifyService.showError(error.message,error);
            }
        )
    }

    userService.getDataAboutMe(function (data) {
            $scope.me = data;
        },
        function (error) {
            console.log(error);
        }
    );

    userService.getFriendRequests(
        function(data){
            $scope.requests = data;
        },
            function(error){
            notifyService.showError(error.message, error)
        }
    )
});
