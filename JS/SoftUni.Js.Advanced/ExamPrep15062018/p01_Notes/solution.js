function addSticker() {
    let titleElement = $('.title')[0];
    let contentElement = $('.content')[0];
    if (titleElement.value !== '' && contentElement.value !== '') {

        let list = $('#sticker-list');
        list
            .append($('<li class="note-content"></li>')
                .append($('<a class="button">x</a>'))
                .append($(`<h2>${titleElement.value}</h2>`))
                .append($(`<hr><p>${contentElement.value}</p>`)));
        titleElement.value = '';
        contentElement.value = '';
        $('.button').on('click', removeSticker);
    }

    function removeSticker() {
        $(this).parent().remove();
    }
}