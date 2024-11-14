<script>
    // Get the form element
    const form = document.getElementById('myForm');

    // Add an event listener to the form submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting to a server

        // Check if the form is valid (HTML5 validation)
        if (form.checkValidity()) {
            // If valid, display a confirmation message (OK)
            alert('OK');
            form.reset();  // Optionally reset the form after submission
        } else {
            // If not valid, show an error message (optional)
            alert('Please fill out the required fields.');
        }
    });
</script>
