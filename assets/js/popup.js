// Pop-up source code
document.getElementById("openForm").addEventListener("click", function () {
    document.getElementById("myForm").style.display = "block";
});

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function showNestedForm() {
    // Hide the main form
    document.querySelector('.form-container').style.display = 'none';
    // Show the nested form
    document.querySelector('.nested-form').style.display = 'block';
}


function backForm() {
    // Hide the nested form
    document.querySelector('.nested-form').style.display = 'none';
    // Show the main form
    document.querySelector('.form-container').style.display = 'flex';
}
// Get today's date in the format YYYY-MM-DD
var today = new Date().toISOString().split('T')[0];

// Set the default value of the date input field to today's date
document.getElementById('reservationDate').value = today;
function showSelectedOptions() {
    // Get the selected options from the first form
    var numberOfPeople = document.getElementById('numberOfPeople').value;
    var reservationDate = document.getElementById('reservationDate').value;
    var reservationTime = document.getElementById('reservationTime').value;

    // Format the date to day/month/year (DD/MM/YYYY)
    var dateParts = reservationDate.split("-");
    var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];

    // Get the day, date, and month
    var selectedDate = new Date(reservationDate);
    var day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    var date = selectedDate.getDate();
    var month = selectedDate.toLocaleDateString('en-US', { month: 'long' });

    // Display the selected options in the second form
    document.querySelector('.people').innerText = '👤 ' + numberOfPeople;
    document.querySelector('.date').innerText = '🗓️ ' + day + ', ' + date + ' ' + month;
    document.querySelector('.time').innerText = '🕒 ' + reservationTime;
}
