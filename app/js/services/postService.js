app.factory('postService', function(baseServiceUrl,authenticationService, $http){
    return{
        getNewsFeedPage: function(startPostId, pageSize, success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/me/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize,
                //url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                headers: authenticationService.getAuthHeaders(),
                StartPostId: startPostId,
                PageSize: pageSize
            };
            $http(request).success(success).error(error);
        },

        getFirstPage: function(pageSize, success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=' + pageSize,
                headers: authenticationService.getAuthHeaders(),
                StartPostId: startPostId,
                PageSize: pageSize
            };
            $http(request).success(success).error(error);
        },

        likePost: function(postId, success, error){
            var request={
                method: 'POST',
                url: baseServiceUrl + '/api/Posts/'+ postId + '/likes',
                headers: authenticationService.getAuthHeaders()
            }
            $http(request).success(success).error(error);
        },

        addCommentToPost: function(postId, commentContent, success, error){
            var request={
                method: 'POST',
                url: baseServiceUrl + '/api/Posts/'+ postId + '/comments',
                headers: authenticationService.getAuthHeaders(),
                data: {
                    commentContent:commentContent
                }
            }
            $http(request).success(success).error(error);
        }
    }

})
