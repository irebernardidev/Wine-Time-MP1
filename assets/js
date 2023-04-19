/* Contact Form */
$(document).ready(function() {
    // Process the form when it is submitted
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      $.ajax({
        url: 'process-contact-form.php',
        type: 'post',
        data: $('#contact-form').serialize(),
        success: function(data) {
          // Display a success message to the user
          $('#contact-form').html('<div class="alert alert-success">Thank you for your message!</div>');
        },
        error: function() {
          // Display an error message to the user
          $('#contact-form').prepend('<div class="alert alert-danger">An error occurred. Please try again later.</div>');
        }
      });
    });
  });
  
  /* Map */

  function initMap() {
    var location = {
      lat: 51.54271333364232,
      lng: -0.15615048271795037
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
