const EMAILJS_SERVICE_ID = "service_2lly29s";
const EMAILJS_TEMPLATE_ID = "template_5nro6ss";
const RESTAURANT_EMAIL = "bennybeshel@gmail.com";

document.addEventListener("DOMContentLoaded", function () {
  const surveyForm = document.getElementById("surveyForm");
  const flashMessage = document.getElementById("flashMessage");

  // Initialize EmailJS
  emailjs.init("_PEwD_ZbRO1EoYbHU"); // Replace with your EmailJS User ID

  // Show flash message
  function showFlashMessage(message, isError = false) {
    flashMessage.textContent = message;
    flashMessage.style.backgroundColor = isError ? "#d32f2f" : "#8b0000";
    flashMessage.style.display = "block";

    setTimeout(() => {
      flashMessage.style.animation = "fadeOut 0.3s";
      setTimeout(() => {
        flashMessage.style.display = "none";
        flashMessage.style.animation = "fadeIn 0.3s";
      }, 300);
    }, 3000);
  }

  // Sanitize inputs to prevent injection
  function sanitize(input) {
    if (typeof input !== "string") return input;
    return input.replace(
      /[<>"'&]/g,
      (match) =>
        ({
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "&": "&amp;",
        }[match])
    );
  }

  // Handle form submission
  surveyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const submitBtn = surveyForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    // Collect form data
    const name = surveyForm.querySelector("#name").value.trim();
    const email = surveyForm.querySelector("#email").value.trim();
    const challenges = Array.from(
      surveyForm.querySelectorAll('input[name="challenges"]:checked')
    ).map((input) => input.value);
    const willingToPay = surveyForm.querySelector(
      'input[name="willingToPay"]:checked'
    )?.value;
    const comments = surveyForm.querySelector("#comments").value.trim();

    // Validate form
    if (challenges.length === 0) {
      showFlashMessage("Please select at least one challenge.", true);
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Feedback";
      return;
    }
    if (!willingToPay) {
      showFlashMessage(
        "Please select if you're willing to pay the fees.",
        true
      );
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Feedback";
      return;
    }

    // Prepare data for EmailJS
    const formData = {
      name: name || "Anonymous",
      email: email || "Not provided",
      challenges: challenges.join(", "),
      willingToPay,
      comments: comments || "None",
      date: new Date().toLocaleString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      to_email: RESTAURANT_EMAIL,
    };

    // Update hidden inputs
    surveyForm.querySelector('input[name="name"]').value = sanitize(
      formData.name
    );
    surveyForm.querySelector('input[name="email"]').value = sanitize(
      formData.email
    );
    surveyForm.querySelector('input[name="challenges"]').value = sanitize(
      formData.challenges
    );
    surveyForm.querySelector('input[name="willingToPay"]').value = sanitize(
      formData.willingToPay
    );
    surveyForm.querySelector('input[name="comments"]').value = sanitize(
      formData.comments
    );
    surveyForm.querySelector('input[name="date"]').value = sanitize(
      formData.date
    );
    surveyForm.querySelector('input[name="to_email"]').value = RESTAURANT_EMAIL;

    // Send form via EmailJS
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, "#surveyForm")
      .then(
        (result) => {
          console.log("EmailJS success:", result);
          showFlashMessage("Thank you for your feedback!");
          surveyForm.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          showFlashMessage(
            "Failed to submit feedback. Please try again or contact support.",
            true
          );
        }
      )
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Feedback";
      });
  });
});
