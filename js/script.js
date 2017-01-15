function doStuff() {
	var rotId = 365299513675005;
	var facebookGraphURL = 'https://graph.facebook.com/365299513675005';
$.ajax({
    url: facebookGraphURL,
    dataType: 'json',
    success: function(data, status) {
      $( '#mainDiv' ).html('Username: ' + data.username);
    },
    error: function(data, e1, e2) {
      $( '#mainDiv' ).html(e2);
    }
});
}