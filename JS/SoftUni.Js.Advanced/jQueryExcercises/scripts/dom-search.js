/*jshint esversion:6*/
function domSearch(selector, isCaseSensitive) {
    let container = $(selector);
    container.addClass('items-control');
    let fragment = document.createDocumentFragment();

    let addDiv = $('<div>');
    addDiv.addClass('add-controls');
    $('<label>Enter Text:<input></label>').appendTo(addDiv);
    let addBtn = $('<a>');
    addBtn.addClass('button')
        .css('display', 'inline-block')
        .text('Add');
    addBtn.appendTo(addDiv);

    let searchDiv = $('<div>');
    searchDiv.addClass('search-controls');
    $('<label>Search:<input></label>').appendTo(searchDiv);

    let listDiv = $('<div>').addClass('result-controls');
    let list = $('<ul class=items-list></ul>');
    list.appendTo(listDiv);
    addDiv.appendTo(fragment);
    searchDiv.appendTo(fragment);
    listDiv.appendTo(fragment);
    container.append(fragment);

    $('.search-controls > label > input').keyup(function() {
        let searchText = $(this).val();
        let listElements = $('.list-item strong').toArray();
        for (let element of listElements) {
            let current = $(element);

            if (isCaseSensitive) {
                if (current.text().indexOf(searchText) < 0) {
                    current.parent().css('display', 'none');
                } else {
                    current.parent().css('display', '');
                }
            } else {
                if (current.text().toLowerCase().indexOf(searchText.toLowerCase()) < 0) {
                    current.parent().css('display', 'none');
                } else {
                    current.parent().css('display', '');
                }
            }
        }
    });

    $('.add-controls > a ').on('click', function() {
        let text = $('.add-controls > label > input').val();
        list.append(`<li class=list-item ><a class=button>X</a><strong>${text}</strong></li>`);

        $('.list-item > a').on('click', function() {
            $(this).parent().remove();
        });
    });

}