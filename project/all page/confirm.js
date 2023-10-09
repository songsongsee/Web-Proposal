let bookingData = null;  // Variable to store booking information

function checkLogin(event) {
    event.preventDefault();
    
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check the username and password (in this example, we'll use a simple check)
    if (username === 'exampleuser' && password === 'password123') {
        // If login is successful, show the booking information
        showBookingInfo();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function showBookingInfo() {
    // Mocked booking information (replace this with actual booking data)
    bookingData = {
        room: 'Room A',
        date: '2023-10-10',
        time: '09:00 AM - 11:00 AM'
    };

    const bookingInfoContainer = document.getElementById('bookingInfoContainer');
    const bookingInfo = document.getElementById('bookingInfo');
    
    // Display the booking information
    bookingInfo.innerHTML = `
        <strong>Room:</strong> ${bookingData.room}<br>
        <strong>Date:</strong> ${bookingData.date}<br>
        <strong>Time:</strong> ${bookingData.time}
    `;

    // Show the booking information container
    bookingInfoContainer.style.display = 'block';
}
