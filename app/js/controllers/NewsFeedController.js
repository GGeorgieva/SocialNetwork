app.controller('NewsFeedController',
    function ($scope, $location, postService, notifyService, authenticationService, pageSize) {
        $scope.authenticationService = authenticationService;
        $scope.dynamicPopover = {
            templateUrl: 'templates/popoverUserPost.html'
        };
        $scope.commentPopover = {
            templateUrl: 'templates/popoverComment.html'
        };
        $scope.commentTextarea = {
            templateUrl: 'templates/commentTextarea.html'
        }
        $scope.commentContent="";
        //TODO: fix getting first post Id for respective page.
        $scope.postPageParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.loadPosts = function loadPosts(){
            $scope.startPostId = $scope.startPostId || "";
            postService.getNewsFeedPage($scope.startPostId, pageSize,
                function(data){
                    console.log(data);
                    $scope.posts = data;
                    if($scope.posts.length==0){
                        $scope.startPostId="";
                    }else{
                        $scope.startPostId = data[data.length-1].id;
                    }
                },
                function(error)  {
                    notifyService.showError("Error loading posts!", error);
                })
        }
        //
        $scope.likePost=function likePost(postId){
            postService.likePost(postId,
                function (data) {
                    $scope.loadPosts();
                },
                function(error){
                    notifyService.showError(error.message, error)
                })
        }
        $scope.addCommentToPost = function addCommentToPost(postId) {
            console.log($scope.commentContent);
            console.log(postId);
            postService.addCommentToPost(postId, $scope.commentContent,
                function (data) {
                    $scope.loadPosts();
                },
                function(error){
                    notifyService.showError(error.message, error)
                })
        }
        $scope.loadPosts();
    });
