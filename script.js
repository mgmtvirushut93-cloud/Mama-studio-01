document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const eventType =
    document.getElementById("eventType").value;

    const eventDate =
    document.getElementById("eventDate").value;

    const details =
    document.getElementById("details").value;

    const whatsappMessage =
`📸 MAMA STUDIO BOOKING ENQUIRY

👤 Name: ${name}

📱 Mobile: ${phone}

🎉 Event Type: ${eventType}

📅 Event Date: ${eventDate}

📝 Event Details:
${details}`;

    const whatsappURL =
`https://wa.me/9569263988?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});