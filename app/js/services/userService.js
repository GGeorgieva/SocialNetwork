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

            editProfile: function(data, success, error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    data: data,
                    headers: authenticationService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editPassword: function(data, success, error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    data: data,
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
