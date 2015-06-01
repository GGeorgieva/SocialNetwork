app.controller('NewsFeedController',
    function ($scope, $location, postService, notifyService, authenticationService, pageSize) {
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
        $scope.startPostId=6876;
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
