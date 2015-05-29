app.controller('NewsFeedController',
    function ($scope, $location, postService, notifyService, authenticationService, pageSize) {
        $scope.postPageParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.authenticationService = authenticationService;
        $scope.reloadPosts = function(){
            postService.getNewsFeedPage($scope.postPageParams.startPage, $scope.postPageParams.pageSize,
                function(data){
                    $scope.posts = data;
                    if($scope.posts.length==0){
                        $scope.posts={};
                    }
                },
                function(error)  {
                    notifyService.showError("Error loading posts!", error);
                }
            )
        }
        $scope.reloadPosts();
    });
