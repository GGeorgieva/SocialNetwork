app.controller('NewsFeedController',
    function ($scope, $location, postService, notifyService, authenticationService, pageSize) {
        $scope.postPageParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.dynamicPopover = {
            templateUrl: 'templates/popoverUserPost.html'
        };
        $scope.commentPopover = {
            templateUrl: 'templates/popoverComment.html'
        }
        //TODO: fix getting first post Id for respective page.
        $scope.startPostId=5591;
        $scope.authenticationService = authenticationService;
        $scope.loadPosts = function loadPosts(){
            console.log($scope.posts);
            console.log($scope.startPostId);
            console.log($scope.postPageParams.startPage);
            postService.getNewsFeedPage($scope.startPostId, pageSize,
                function(data){
                    $scope.posts = data;
                    $scope.startPostId = data[data.length-1].id;
                    if($scope.posts.length==0){
                        $scope.posts={};
                    }
                },
                function(error)  {
                    notifyService.showError("Error loading posts!", error);
                }
            )
        }



        $scope.loadPosts();
    });
