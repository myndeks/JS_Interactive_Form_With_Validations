// Focus on first Input Field
const name = document.getElementById('name').focus();

// Hide other Field in job role
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = 'none';

// If Other is selected in jobROle, display other text field.
const title = document.getElementById('title');
title.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
    }
});

// Hide selected theme option
const tShirtDesign = document.getElementById('design');
tShirtDesign.remove(0);

// Set default Color option
const tShirtColor = document.getElementById('color');
const tShirtNewValue = document.createElement('option');
const colorSelections = document.getElementById('colors-js-puns');
tShirtNewValue.textContent = 'Please select a T-shirt theme';
tShirtNewValue.selected = 'select';
tShirtColor.add(tShirtNewValue, tShirtColor[0]);



// Hide the colors in the “Color” drop down menu.

tShirtColor[1].style.display = 'none';
tShirtColor[2].style.display = 'none';
tShirtColor[3].style.display = 'none';
tShirtColor[4].style.display = 'none';
tShirtColor[5].style.display = 'none';
tShirtColor[6].style.display = 'none';

tShirtDesign.addEventListener("change", (e) => {
    const selectedValue = e.target.value;

    const color = document.getElementById('color');

        if (selectedValue === 'js puns') {
            tShirtColor[1].style.display = 'block';
            tShirtColor[1].selected = 'select';
            tShirtColor[2].style.display = 'block';
            tShirtColor[3].style.display = 'block';
            tShirtColor[4].style.display = 'none';
            tShirtColor[5].style.display = 'none';
            tShirtColor[0].style.display = 'none';
            tShirtColor[6].style.display = 'none';
        } else if (selectedValue === 'heart js') {
            tShirtColor[0].style.display = 'none';
            tShirtColor[1].style.display = 'none';
            tShirtColor[2].style.display = 'none';
            tShirtColor[3].style.display = 'none';
            tShirtColor[4].selected = 'select';
            tShirtColor[4].style.display = 'block';
            tShirtColor[5].style.display = 'block';
            tShirtColor[6].style.display = 'block'; 
        }

});


// Activities

// Creating new diw where we will display total cost of selected activities
const activities = document.querySelector('.activities');
const legend = document.getElementsByName('legend');
const newDiv = document.createElement('div');
activities.appendChild(newDiv);

let totalCost  = 0;


// Calculate totalcost of selected activities
activities.addEventListener('change', (e) => {
    let cost = parseInt(e.target.dataset.cost);
    if (e.target.checked) {

        totalCost+=cost;

    } else {
        totalCost-=cost;
    }
    newDiv.textContent = `Total  $${totalCost}`;

    if (totalCost === 0) {
        newDiv.style.display = 'none';
    } else {
        newDiv.style.display = 'block';
    }

    // Hide activities which contains same date and time
    const checkboxes = document.querySelectorAll('.activities input');
    const label = document.querySelectorAll('.activities label');

    for (let i = 0; i < checkboxes.length; i++) {
    

        if (checkboxes[i].dataset.dayAndTime ===  e.target.dataset.dayAndTime) {
            checkboxes[i].disabled = true;
            label[i].style.color = "#696969"; 
            console.log('true');
        }
        
    }
});


// Payment Selection

//DOM
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

const paymentOption = document.getElementById('payment');
paymentOption[0].style.display = 'none';
paymentOption[1].selected = 'select';

paypal.style.display = 'none';
bitcoin.style.display = 'none';


paymentOption.addEventListener('change', (e) => {
    if (e.target.value === 'credit card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (e.target.value === 'paypal') {
        creditCard.style.display = 'none';
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';      
    } else if (e.target.value === 'bitcoin') {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';   
    }
});

// Validation
const form = document.querySelector('form');

const validateName = () => {
    let nameInput = document.getElementById('name');
    nameInput = nameInput.value;
    const regexName = /^[A-Za-z]+\s?([A-Za-z]+)?$/; 
    if(regexName.test(nameInput)){
        return true;
    } else{
        return false;
    }
  }

const validateEmail = () => {
    let email = document.getElementById('mail');
    email = email.value;
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(regexEmail.test(email)){
        return true;
    } else{
        return false;
    }
}

const validateCardNumber = () => {
    let cardNumber = document.getElementById('cc-num');
    cardNumber = cardNumber.value;
    const regexCardNumber = /^\d{13,16}$/;
    if(regexCardNumber.test(cardNumber)){
        return true;
    } else{
        return false;
    }
  }

const validateZipCode = () => {
    let zipCode = document.getElementById('zip');
    zipCode = zipCode.value;
    const regexZipCode = /^\d{5}$|^\d{5}-\d{4}$/;
    if(regexZipCode.test(zipCode)){
        return true;
    } else{
        return false;
    }
  }

  const validateCvvCode = () => {
    let cvv = document.getElementById('cvv');
    cvv = cvv.value;
    const regexCvvCode = /^[0-9]{3,3}$/;
    if(regexCvvCode.test(cvv)){
        return true;
    } else{
        return false;
    }
  }

  const validateActivities = () => {
    const inputActivities = document.querySelectorAll('input[type="checkbox"]');
      for (let i = 0; i < inputActivities.length; i ++) {
          if(inputActivities[i].checked === true) {           
              return true;
          } else if (inputActivities[i].checekd === false) {
            return false;
          }
      }
   }


//  If all field entered correct submit form, else if incorrect display message on top, please enter correct information
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateName();
    validateEmail();
    validateCardNumber();
    validateZipCode();
    validateCvvCode();
    validateActivities();


    if (validateName() === true && 
        validateEmail() === true &&  
        validateCardNumber() === true && 
        validateZipCode() === true && 
        validateCvvCode() === true && 
        validateActivities() === true
        ) {
        return true;
    } else {
        const header = document.querySelector('header');
        const warnningMessage = document.createElement('div');
        warnningMessage.textContent = `Please fill all information`;
        header.appendChild(warnningMessage);
        return false;
    }
})

// Getting DOM Elements For Validation
const nameField = document.getElementById('name');
const mailField = document.getElementById('mail');
const ccNumField = document.getElementById('cc-num');
const zipField = document.getElementById('zip');
const cvvField = document.getElementById('cvv');


// Listen Keyup what is written in the fields, if information is written is incorrect then border gets red color until
// good information is entered.

    form.addEventListener('keyup', (e) => {
        if (validateName() === true) {
            nameField.style.borderColor = 'inherit';
        } else {
            nameField.style.borderColor = 'red';
        }
        if (validateEmail() === true) {
            mailField.style.borderColor = 'inherit';
        } else {
            mailField.style.borderColor = 'red';
        }
        if (validateCardNumber() === true) {
            ccNumField.style.borderColor = 'inherit';
        } else {
            ccNumField.style.borderColor = 'red';
        }
        if (validateZipCode() === true) {
            zipField.style.borderColor = 'inherit';
        } else {
            zipField.style.borderColor = 'red';
        }
        if (validateCvvCode() === true) {
            cvvField.style.borderColor = 'inherit';
        } else {
            cvvField.style.borderColor = 'red';
        }
        if (validateActivities() === true) {   
        } else {
            const activitiesError = document.createElement('div');
            activitiesError.textContent = `Please choose at least one activity`;
            activities.appendChild(activitiesError);
        }
    });