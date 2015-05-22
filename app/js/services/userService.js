app.factory('userService',
    function ($http, baseServiceUrl, authenticationService) {
        return {
            getDataAboutMe: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authenticationService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getUserPreview: function(userName, success, error){
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/'+ userName+ '/preview',
                    headers: authenticationService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
