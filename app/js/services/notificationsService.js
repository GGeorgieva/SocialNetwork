app.factory('notifyService',
    function () {
        return {
            showInfo: function(msg,error) {
                noty({
                        text: msg,
                        type: 'info',
                        layout: 'topCenter',
                        timeout: 1000}
                );
            },
            showError: function(msg) {
                noty({
                        text: msg,
                        type: 'error',
                        layout: 'topCenter',
                        timeout: 5000}
                );
            }
        }
    }
);
