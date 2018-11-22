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

    $('.add-controls > a ').on('click', function() {
        let text = $('.add-controls > label > input').val();

        list.append(`<li><a class=button>X</a><strong>${text}</strong></li>`);
    });
}