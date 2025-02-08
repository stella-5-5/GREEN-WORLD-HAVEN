document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simulate sending message (replace with your actual sending logic)
    // For demonstration purpose, just show success message
    document.getElementById('successMessage').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('successMessage').classList.add('hidden');
        // Reset form fields
        document.getElementById('contactForm').reset();
    }, 3000);
});
