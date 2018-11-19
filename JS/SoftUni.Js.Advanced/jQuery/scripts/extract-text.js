function extractText() {
    const value = $('#items >li').toArray()
        .map(li => $(li).text()).join(', ');

    $('#result').text(value);
}