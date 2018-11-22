/*jshint esversion:6*/

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();

    let textArea = $('<textarea>');
    textArea.attr('class', 'counter');
    textArea.attr('value', '0');
    textArea.attr('disabled', 'disabled');

    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn')
        .text('Increment');

    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.text('Add');

    let list = $('<ul>');
    list.addClass('result');
    let counter = 0;
    textArea.text(counter);
    incrementBtn.on('click', () => {
        counter++;
        textArea.text(counter);
    });
    addBtn.on('click', () => {
        list.append($(`<li>${counter}</li>`));
    });


    textArea.appendTo(fragment);
    addBtn.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);

}