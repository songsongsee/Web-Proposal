let bookingData = [];  // Array to store booking information

function checkLogin(event) {
    event.preventDefault();
    
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check the username and password (in this example, we'll use a simple check)
    if (username === '630911156' && password === '630911156') {
        // If login is successful, show the booking information
        showBookingInfo();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function showBookingInfo() {
    // Mocked booking information (replace this with actual booking data)
    bookingData = [
        { room: 'Room A', date: '2023-10-10', time: '09:00 AM - 11:00 AM' },
        { room: 'Room B', date: '2023-10-11', time: '02:00 PM - 04:00 PM' },
        { room: 'Room C', date: '2023-10-12', time: '10:00 AM - 12:00 PM' }
    ];

    const bookingInfoContainer = document.getElementById('bookingInfoContainer');
    const bookingInfo = document.getElementById('bookingInfo');
    
    // Display the booking information
    bookingInfo.innerHTML = '';

    for (let i = 0; i < bookingData.length; i++) {
        const bookingItem = bookingData[i];
        const bookingItemDiv = document.createElement('div');
        bookingItemDiv.classList.add('booking-info-item');
        bookingItemDiv.innerHTML = `
            <strong>Room:</strong> ${bookingItem.room}<br>
            <strong>Date:</strong> ${bookingItem.date}<br>
            <strong>Time:</strong> ${bookingItem.time}
            <button onclick="cancelBooking(${i})">Cancel</button>
        `;
        bookingInfo.appendChild(bookingItemDiv);
    }

    // Show the booking information container
    bookingInfoContainer.style.display = 'block';
}

function cancelBooking(index) {
    // Confirm if the user wants to cancel the booking
    if (confirm('Are you sure you want to cancel this booking?')) {
        const canceledRoom = bookingData[index].room;
        // Remove the booking at the specified index+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        bookingData.splice(index, 1);
        // Update the displayed booking information
        showBookingInfo();
        // Display a message indicating that the booking has been canceled for the specific room
        alert('Booking for room ' + canceledRoom + ' has been canceled.');
    }
}


