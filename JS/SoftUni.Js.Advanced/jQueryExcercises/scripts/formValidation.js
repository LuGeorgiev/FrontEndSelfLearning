/*jshint esversion:6*/

function validate() {
    const username = $('#username');
    const email = $('#email');
    const password = $('#password');
    const confirmPassword = $('#confirm-password');
    const companyCheckbox = $('#company');
    const companyNumber = $('#companyNumber');
    const companyInfo = $('#companyInfo');
    const submitBtn = $('#submit');
    const validationDiv = $('#valid');
    let allIsValid = true;

    companyCheckbox.on('change', function() {
        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function(ev) {
        ev.preventDefault();
        validateForm();
        validationDiv.css('display', allIsValid ? 'block' : 'none');
        allIsValid = true;
    });

    function validateForm() {
        validateInputWithRegex(username, /^[A-Za-z0-9]{3,20}$/g);
        validateInputWithRegex(email, /^.*?@.*?\..*$/g);
        if (confirmPassword.val() === password.val()) {
            validateInputWithRegex(password, /^[\w]{5,15}$/g);
            validateInputWithRegex(confirmPassword, /^[\w]{5,15}$/g);
        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            allIsValid = false;
        }

        if (companyCheckbox.is(':checked')) {
            validateCompanyInfo();
        }
    }

    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'sold red');
            allIsValid = false;
        }
    }

    function validateCompanyInfo() {
        let numValue = Number(companyNumber.val());
        if (numValue >= 1000 && numValue <= 99999) {
            companyNumber.css('border', 'none');
        } else {
            companyCheckbox.css('border', 'solid red');
            allIsValid = false;
        }
    }
}