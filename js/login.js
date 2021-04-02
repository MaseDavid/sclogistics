function myFunction() {
    var x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }


document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    if(!email || !password) {
      displayAlert("danger", "Sorry, Fields cannot be empty");
      return;
    } 
    if (!emailRegex.test(email)) {
      displayAlert("danger", "Email not Valid");
      return;
    }
    const data = {
      email,
      password,
    };