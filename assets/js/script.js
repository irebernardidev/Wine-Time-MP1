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

  /* Review Form */
  
  const form = document.getElementById("review-form");
  const successMessage = document.createElement("div");
  successMessage.classList.add("alert", "alert-success");
  successMessage.innerHTML = "Thank you for your review!";
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const review = document.getElementById("review").value;
    
    // You can send the form data to your server using fetch() or XMLHttpRequest()
    // Here, we'll just display a success message
    
    form.reset();
    form.appendChild(successMessage);
  });


 

