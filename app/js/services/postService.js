app.factory('postService', function(baseServiceUrl,authenticationService, $http){
    return{
        getNewsFeedPage: function(startPage, pageSize, success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/me/feed?' + startPage + '=&PageSize=' + pageSize,
                //url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                headers: authenticationService.getAuthHeaders(),
                PageSize: pageSize,
                StartPostId: startPage

            };
            $http(request).success(success).error(error);
        }
    }

})
