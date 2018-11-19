function search() {
    let targetValue = $('#searchText').val();
    if (targetValue.trim() !== '') {
        $(`#towns li`).css('font-weight', '');
        const arr = $(`#towns li:contains(${targetValue})`);
        $('#result').text(arr.length + ' matches found.');
        arr.css('font-weight', 'bold');

        //console.log($(`#towns li:contains(${targetValue})`));
    }
}