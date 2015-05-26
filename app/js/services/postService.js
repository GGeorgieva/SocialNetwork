app.factory('postService', function(baseServiceUrl,authenticationService, $http){
    return{
        getNewsFeedPage: function(success, error){
            var request = {
                method: 'GET',
                //url: baseServiceUrl + '/api/me/feed?' + startPostId + '=&PageSize=' + pageSize,
                url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                headers: authenticationService.getAuthHeaders(),
                PageSize: 5

            };
            $http(request).success(success).error(error);
        }
    }

})
