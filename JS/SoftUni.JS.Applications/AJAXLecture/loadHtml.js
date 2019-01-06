function loadHtml() {
    //$('.container').load('text.html');

    //$('.container').load('https://dir.bg');
    // CORS is access-control-allow-origin: * and whole page can be loaded

    let username = $('#username').val();
    let url = `https://api.github.com/users/${username}/repos`;
    $.get(url, function(date) {
        $(date).each(function(index, item) {
            $('.container').append('<li>' + item.html_url + '</li>');
        });
    });

    //$('.container').load(url);
}