function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here
    $('.custom-select').on('keydown', function() {
        $('#submit').attr('disabled', false);
    });
    let currentCapacity = 0;
    let totalPrice = 0;
    $('#submit').on('click', function() {
        let productElement = $('.custom-select');
        let priceElement = $('#price');
        let quantityElement = $('#quantity');
        if (currentCapacity + Number(quantityElement.val()) <= 150) {
            $('.display')
                .append($(`<li>Product: ${productElement.val()} Price: ${priceElement.val()} Quantity: ${quantityElement.val()}</li>`));

            currentCapacity += Number(quantityElement.val());
            totalPrice += Number(priceElement.val()) * Number(quantityElement.val());
            $('#capacity').val(currentCapacity);
            $('#sum').val(totalPrice);

            productElement.val('');
            priceElement.val('1');
            quantityElement.val('1');
            $('#submit').attr('disabled', true);
            if (currentCapacity === 150) {
                $('#capacity').addClass('fullCapacity');
                $('#capacity').val('full');
                productElement.attr('disabled', true);
                priceElement.attr('disabled', true);
                quantityElement.attr('disabled', true);
            }
        }
    });
}
//Result 90/100