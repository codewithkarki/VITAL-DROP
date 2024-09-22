document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const donatedBefore = document.querySelector('input[name="donatedBefore"]:checked');
    const errorMessage = document.getElementById('errorMessage');
    
    let error = '';

    if (!name) {
        error = 'Name is required.';
    } else if (age < 18 || age > 65) {
        error = 'Age should be between 18 and 65.';
    } else if (!/^[0-9]{10}$/.test(phone)) {
        error = 'Phone number must be 10 digits.';
    } else if (!donatedBefore) {
        error = 'Please select if you have donated blood before.';
    }

    if (error) {
        errorMessage.textContent = error;
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
    }
});
