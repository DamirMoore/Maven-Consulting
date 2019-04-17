function validateName(name) {
  if (name == '') {
    return false;
  }
  return true;
}

function submitContactForm() {
  var name = document.querySelector('.contact-name').value;
  var email = document.querySelector('.contact-email').value;
  var message = document.querySelector('.contact-message').value;

  console.log('name:', name);
  console.log('email:', email);
  console.log('message:', message);


  if (name != '' && email != '' && message != '') {
    console.log('form submitted');
    // document.querySelector('.contact-us-real-button').click();
  } else {
    console.log('Error: All fields must be filled out.');
  }
}