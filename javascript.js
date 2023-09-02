document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    emailjs.init("TioYzu2KLVBWKU17V");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get form input values
        const ownerEmail = document.getElementById("email").value;
        const fullName = document.getElementById("name").value;
        const guestEmail = document.getElementById("email_guest").value;
        const guestCell = document.getElementById("guest_cell").value;
        const guestNum = document.getElementById("guest_num").value;
        const guestChildren = document.getElementById("guest_children").value;
        const guestPet = document.getElementById("guest_pet").value;
        const checkinDate = document.getElementById("checkin").value;
        const checkinTime = document.getElementById("checkin_time").value;
        const checkoutDate = document.getElementById("checkout").value;
        const checkoutTime = document.getElementById("checkout_time").value;
        const specialInstructions = document.getElementById("message").value;

        // Construct email content
        const emailContent = `
            Owner Email: ${ownerEmail}
            Full Name: ${fullName}
            Guest Email: ${guestEmail}
            Guest Phone Number: ${guestCell}
            Number of Guests: ${guestNum}
            Number of Children: ${guestChildren}
            Guest Pets: ${guestPet}
            Check-in Date: ${checkinDate}
            Check-in Time: ${checkinTime}
            Check-out Date: ${checkoutDate}
            Check-out Time: ${checkoutTime}
            Special Instructions: ${specialInstructions}
        `;

        // Send email using EmailJS
        emailjs.send("service_kg61mda", "template_d41tqjj", {
            to_email: ownerEmail, // Replace with recipient's email
            subject: "MegaMind Customer Report",
            email_content: emailContent
        })
        .then(function(response) {
            console.log("Email sent successfully!", response);
            alert("Email sent successfully!");
            contactForm.reset();
        }, function(error) {
            console.error("Email sending failed.", error);
            alert("Email sending failed. Please try again later.");
        });


        // Display a confirmation message
        alert("Form submitted successfully!");
        contactForm.reset(); // Clear the form after submission
    });
});
