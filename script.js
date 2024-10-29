document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log(`Email submitted: ${email}`);
    alert('Thank you for signing up!');
});
