app.controller('EditProfileController', function ($scope, userService, notifyService, authenticationService, $location) {
    if(authenticationService.isLoggedIn()){
        userService.getDataAboutMe(function(data){
                $scope.editProfileData = data;
            },
            function(error)  {
                notifyService.showError(error.message, error);
            }
        );
    }

    $scope.profileImageSelected = function(fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.editProfileData.profileImageData = reader.result;
                $("#profile-image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $("#profile-image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.coverImageSelected = function(fileInputField) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.editProfileData.coverImageData = reader.result;
                $("#cover-image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $("#cover-image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.editProfile = function(data){
        userService.editProfile(data,
            function(data){
                notifyService.showInfo(data.message);
                $location.path('/user/home');
            },
            function(error){
                notifyService.showError(error.message, error);
            }
        );
    }
});
