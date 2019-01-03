function makeReservation(containerId) {
    $('#submit').on('click', submitForm);
    $('#edit').on('click', editForm);
    $('#continue').on('click', addPaymentDetails);

    let fullName = $('#fullName');
    let email = $('#email');
    let phone = $('#phoneNumber');
    let address = $('#address');
    let postCode = $('#postalCode');

    let submitBtn = $('#submit');
    let editBtn = $('#edit');
    let continueBtn = $('#continue');

    let fullNameValue;
    let emailValue;
    let phonValue;
    let addressValue;
    let postCodeValue;

    function submitForm() {
        if (fullName.val() !== '' && email.val() !== '') {
            $('#infoPreview')
                .append(`<li>Name: ${fullName.val()}`)
                .append(`<li>E-mail: ${email.val()}`)
                .append(`<li>Phone: ${phone.val()}`)
                .append(`<li>Address: ${address.val()}`)
                .append(`<li>Postal Code: ${postCode.val()}`);
            submitBtn.attr('disabled', true);
            editBtn.removeAttr('disabled');
            continueBtn.removeAttr('disabled');

            fullNameValue = fullName.val();
            fullName.val('');
            emailValue = email.val();
            email.val('');
            phonValue = phone.val();
            phone.val('');
            addressValue = address.val();
            address.val('');
            postCodeValue = postCode.val();
            postCode.val('');
        }
    }

    function editForm() {
        fullName.val(`${fullNameValue}`);
        email.val(`${emailValue}`);
        phone.val(`${phonValue}`);
        address.val(`${addressValue}`);
        postCode.val(`${postCodeValue}`);

        submitBtn.attr('disabled', false);
        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);
        $('#infoPreview li').remove();
    }

    function addPaymentDetails() {
        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);

        let container = $('#container');
        let select = $('<select />')
            .attr('id', 'paymentOptions')
            .attr('class', 'custom-select');
        let optionOne = $('<option>')
            .attr('selected', true)
            .attr('disabled', true)
            .attr('hidden', true)
            .text('Choose');
        let optionTwo = $('<option>')
            .attr('value', 'creditCard')
            .text('Credit Card');
        let optionThree = $('<option>')
            .attr('value', 'bankTransfer')
            .text('Bank Transfer');
        optionOne.appendTo(select);
        optionTwo.appendTo(select);
        optionThree.appendTo(select);

        container
            .append($('<h2>Payment details</h2>'));
        container
            .append(select)
            .append(`<div id="extraDetails">`);

        $('#paymentOptions').on('change', appendExtraDetails);
    }

    function appendExtraDetails() {
        let selected = $('#paymentOptions')
            .find(':selected')
            .val();
        $('extraDetails').empty();
        if (selected === 'creditCard') {
            $("#extraDetails")
                .append($('<div class="inputLable">Card Number<input></div><br>'))
                .append($('<div class="inputLable">Expiration Date<input></div><br>'))
                .append($('<div class="inputLable">Security Numbers<input></div><br>'));
        } else {
            $("#extraDetails")
                .append($('<p>You have 48 hours to transfer the amount to:</p><br>'))
                .append($('<p>IBAN: GR96 0810 0010 000 0123 4567 890</p>'));
        }

        $("#extraDetails")
            .append($('<button id="checkOut">Check Out</button>'));
        $('#checkOut').on('click', function() {
            $('#wrapper').empty();
            $('#wrapper')
                .append($('<h4>Thank you for your reservation!</h4>'));
        });
    }
}