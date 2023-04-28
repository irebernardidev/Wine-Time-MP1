/* Contact Form */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const sendButton = document.querySelector(".btn-send");

  contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("form_name");
      const email = document.getElementById("form_email");
      const message = document.getElementById("form_message");

      if (name.value === "" || email.value === "" || message.value === "") {
          alert("Please fill in all required fields.");
      } else if (!validateEmail(email.value)) {
          alert("Please enter a valid email address.");
      } else {
          sendButton.classList.add("sending");
          setTimeout(() => {
              window.location.href = "success.html";
              sendButton.classList.remove("sending");
          }, 1000);
      }
  });

  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
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
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("review-form");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const review = document.getElementById("review").value;
      
      // Redirect to the thank you page
      window.location.href = "thankyou.html";
    });
});
  
  