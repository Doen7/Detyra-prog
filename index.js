document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  let valid = true;

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Email-i nuk eshte ne formatin e duhur.';
      console.log('Email-i nuk eshte ne formatin e duhur.');
      valid = false;
  }

  const phoneRegex = /^(068|069)[0-9]{8}$/;
  if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Numri i telefonit duhet te permbaje 10 numra dhe te filloje me 068 ose 069.';
      console.log('Numri i telefonit nuk eshte valid.');
      valid = false;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent = 'Fjalekalimi duhet te kete minimum 8 karaktere, nje germe te madhe, nje germe te vogel dhe nje numer.';
      console.log('Fjalekalimi nuk eshte valid.');
      valid = false;
  }

  if (valid) {
      document.getElementById('successMessage').textContent = 'Te dhenat u validuan me sukses!';
      console.log('Te dhenat u validuan me sukses!');
  }
});
