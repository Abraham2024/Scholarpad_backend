        document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            var usernameInput = document.getElementById('username');
            var passwordInput = document.getElementById('password');
            var password2Input = document.getElementById('password2');

            // Check for spaces in the username
            if (usernameInput.value.includes(' ')) {
                alert('Username cannot contain spaces.');
                event.preventDefault(); // Prevent form submission
            }

            // Check password strength
            var passwordValue = passwordInput.value;
            if (passwordValue.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            } else {
                // Check if the password contains at least one digit
                if (!/\d/.test(passwordValue)) {
                    alert('Password must contain at least one digit.');
                    event.preventDefault();
                }
            }

            // Check if passwords match
            if (passwordInput.value !== password2Input.value) {
                alert('Passwords do not match.');
                event.preventDefault();
            }
        });

        // Show password strength
        var passwordInput = document.getElementById('password');
        var strengthIndicator = document.createElement('div');
        strengthIndicator.style.color = 'gray';

        passwordInput.addEventListener('input', function () {
            var passwordStrength = calculatePasswordStrength(passwordInput.value);
            strengthIndicator.textContent = 'Password Strength: ' + passwordStrength;
        });

        passwordInput.insertAdjacentElement('afterend', strengthIndicator);

        function calculatePasswordStrength(password) {
            // Implement your own password strength calculation logic
            // For example, you can check the length and complexity of the password
            if (password.length >= 6 && /\d/.test(password)) {
                return 'Good';
            } else {
                return 'Poor';
            }
        }
    });

