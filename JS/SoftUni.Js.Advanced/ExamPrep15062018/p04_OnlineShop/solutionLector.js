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
    // Write your code here:
    let productElement = $('.custom-select');
    let priceElement = $('#price');
    let quantityElement = $('#quantity');

    let button = $('#submit');
    button.on('click', addProduct);
    let ul = $('.display');

    let capacity = $('#capacity');
    let sum = $('#sum');

    let totalCacity = 0;
    let totalSum = 0;
    productElement
        .on('input', () => button.attr('disabled', false));

    function addProduct() {
        if (productElement.val() &&
            priceElement.val() &&
            quantityElement.val()) {

            totalCacity += +quantityElement.val();
            totalSum += +priceElement.val() * +quantityElement.val();
            let li = $('<li>');
            li.text(`Product: ${productElement.val()} Price: ${priceElement.val()} Quantity: ${quantityElement.val()}`);
            ul.append(li);
            if (totalCacity <= 149) {

                capacity.val(totalCacity);

                resetAll();
            } else {
                capacity.val('full');
                capacity.addClass('fullCapacity');
                disableAll();
            }
            sum.val(totalSum);
        }
    }

    function resetAll() {
        productElement.val('');
        priceElement.val(1);
        quantityElement.val(1);
        button.attr('disabled', true);
    }

    function disableAll() {
        productElement.attr('disabled', true);
        priceElement.attr('disabled', true);
        quantityElement.arrt('disabled', true);
        button.attr('disabled', true);

    }
}
// 70/100