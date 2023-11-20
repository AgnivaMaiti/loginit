document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log('Successfully logged in:', user);
        })
        .catch(function (error) {
            console.error('Login failed:', error);
        });
});
