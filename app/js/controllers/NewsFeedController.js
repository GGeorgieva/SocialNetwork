app.controller('NewsFeedController', function ($scope, postService, notifyService, authenticationService, $location) {
    if(authenticationService.isLoggedIn()){
        postService.getNewsFeedPage(
            function(data){
                console.log(data);
                console.log(data[0].postContent);
                $scope.posts = data;
            },
            function(error)  {
                notifyService.showError("Error", error);
            }
        );
    }
});
