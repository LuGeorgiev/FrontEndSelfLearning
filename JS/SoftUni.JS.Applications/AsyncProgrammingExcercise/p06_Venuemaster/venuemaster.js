// Attache user credentials to each request
// GET all venues for given date/ response with IDs
// Itterate venue IDs to collect details
// Compose HTML and attach button event handler
// POST request to buy tickets (POST)
// Display ticket
const host = 'https://baas.kinvey.com';

function attachEvents() {
    $('#getVenues').on('click', getVenues);
}

async function getVenues() {
    const infoDiv = $('#venue-info');
    const date = $('#venueDate').val();
    const venueIds = await getAllVenues(date);
    const details = await Promise.all(venueIds.map(getVenueDetails));

    infoDiv.empty();
    for (const venue of details) {
        infoDiv.append(renderVenue(venue));
    }
}

function renderVenue(venue) {
    const html = $(`<div class="venue" id="${venue._id}">
<span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
<div class="venue-details" style="display: none;">
  <table>
    <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
    <tr>
      <td class="venue-price">${venue.price} lv</td>
      <td><select class="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select></td>
      <td><input class="purchase" type="button" value="Purchase"></td>
    </tr>
  </table>
  <span class="head">Venue description:</span>
  <p class="description">${venue.description}</p>
  <p class="description">Starting time: ${venue.startingHour}</p>
</div>
</div>
`);
    $(html).find('.purchase').on('click', (event) => {
        const qty = $(html).find('.quantity option:selected').val();
        renderConfirnScreen(venue._id, venue.name, qty, venue.price);
    });

    return html;
}

function renderConfirnScreen(venueId, name, qty, price) {
    const html = $(`<span class="head">Confirm purchase</span>
    <div class="purchase-info">
      <span>${name}</span>
      <span>${qty} x ${price}</span>
      <span>Total: ${qty * price} lv</span>
      <input type="button" value="Confirm">
    </div>
    `);
    $(html).find('input').on('click', () => purchaseTickets(venueId, qty));
    $('#venue-info').html(html);
}


function remote(method, url, data) {
    return $.ajax({
        method,
        url,
        headers: {
            'Authorization': 'Basic Z3Vlc3Q6cGFzcw=='
        }
    });
}

function getAllVenues(date) {
    const venueData = '/rpc/kid_BJ_Ke8hZg/custom/calendar?query=';
    return remote('POST', host + venueData + date);
}

function getVenueDetails(venueId) {
    return remote('get', host + 'appdata/kid_BJ_Ke8hZg/venues/' + venueId);
}

async function purchaseTickets(venueId, qty) {
    const ticket = await remote('post', `${host}/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${venueId}&qty=$${qty}`);
    $('#venue-info').html(ticket.html);
}