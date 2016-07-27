app.factory('Notifier', [
  'toastr',
  'toastrConfig',
  function(toastr, toastrConfig) {
    toastrConfig.positionClass = "toast-bottom-right";
    toastrConfig.timeOut = "5000";
    toastrConfig.closeButton = true;
    toastrConfig.progressBar = true;

    notifyIt = function(message, type) {
      return toastr[type](message);
    };

    return {
      notifyInfo: function(message) {
        notifyIt(message, 'info');
      },
      notifyWarning: function(message) {
        notifyIt(message, 'warning');
      },
      notifySuccess: function(message) {
        notifyIt(message, 'success');
      },
      notifyError: function(message) {
        notifyIt(message, 'error');
      },
      processAndNotifyError: function(error){
        if (error.status === 404 || error.status === 500)
        {
          notifyIt(error.statusText + " " + error.status, 'error');
        }else if (error.error) {
          notifyIt(error.error, 'error');
        } else if (error.data && error.data.error) {
          notifyIt(error.data.error, 'error');
        } else if (error.data ) {
          // HTTP response error from server
          notifyIt(error.data.message + " " + error.status, 'error');
        } else {
          notifyIt(error, 'error');
        }
      }
    };
  }
]);