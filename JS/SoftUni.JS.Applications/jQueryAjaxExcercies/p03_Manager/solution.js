/*jshint esversion:6*/
function attachEvents() {
    const URL = 'https://jsappsfirstdemo-71651.firebaseio.com/';
    const AUTHOT = $('#author');
    const CONTENT = $('#content');
    let MESSAGES = $('#messages');

    $('#submit').on('click', sentMsg);
    $('#refresh').on('click', seeAll);

    function sentMsg() {
        const name = AUTHOT.val();
        const mesContent = CONTENT.val();
        const newMessage = {
            "author": name,
            "content": mesContent,
            "timestamp": Date.now()
        }
        $.ajax({
                method: "POST",
                url: URL + '.json',
                data: JSON.stringify(newMessage)
            })
            .then(function() {
                AUTHOT.val('');
                CONTENT.val('');
            })
            .catch(handlError);
    }

    function seeAll() {
        $.ajax({
                method: "GET",
                url: URL + '.json'
            })
            .then(appendMessages)
            .catch(handlError);
    }

    function appendMessages(msgs) {
        MESSAGES.val('');
        let keys = Object.keys(msgs);
        keys.sort((a, b) => +msgs[a].timestamp - +msgs[b].timestamp);
        let result = '';
        for (const id of keys) {
            result += `${msgs[id].author}: ${msgs[id].content}\n`;
        }
        MESSAGES.val(result);
    }

    function handlError(err) {
        console.log(err);
    }
}