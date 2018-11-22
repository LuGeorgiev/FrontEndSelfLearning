/*jshint esversion: 6*/
function initializeTable() {
    $("#createLink").on('click', createCountry);

    addCountryTotable('Bulgaria', 'Sofia');
    addCountryTotable('Germany', 'Berlin');
    addCountryTotable('Russia', 'Moscow');

    function addCountryTotable(country, city) {
        let tableRow = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${city}</td>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>')
                    .on('click', moveUp))
                .append($('<a href="#">[Down]</a>')
                    .on('click', moveDown))
                .append($('<a href="#">[Delete]</a>')
                    .on('click', deleteRow)));

        tableRow.css('display', 'none');
        $('#countriesTable').append(tableRow);
        tableRow.fadeIn(2000);
        hideButtons();
    }


    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryTotable(country.val(), capital.val());
        country.val('');
        capital.val('');
        hideButtons();
    }

    function moveUp() {
        //console.log($(this).parent().parent());
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertBefore(row.prev());
            hideButtons();
            row.fadeIn();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            hideButtons();
            row.fadeIn();
        });
    }

    function deleteRow() {
        $(this).fadeOut(function() {
            $(this).parent().parent().remove();
            hideButtons();
        });
    }

    function hideButtons() {
        $('#countriesTable a').css('display', 'inline-block');

        $('#countriesTable tr:eq(2) a:contains("Up")')
            .css('display', 'none');

        $('#countriesTable tr:last a:contains("Down")')
            .css('display', 'none');
    }
}