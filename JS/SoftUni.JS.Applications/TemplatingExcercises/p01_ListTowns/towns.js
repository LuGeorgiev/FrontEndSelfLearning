/*jshint esversion:6*/
function attachEvents() {
    $('#btnLoadTowns').on('click', getTownsInfo);

    function getTownsInfo() {
        let townsData = $('#towns').val()
            .split(', ')
            .reduce((acc, cur) => {
                acc.towns.push({ 'town': cur });

                return acc;
            }, { 'towns': [] });

        renderTowns(townsData);
    }

    async function renderTowns(townsData) {
        //let source = await $.get('./template.hbs'); //NOT WORKING due to CORS

        let source = await $('#towns-template').html();
        let template = Handlebars.compile(source);

        $('#root').html(template(townsData));
        $('#towns').val('');

        // $.get('template.hbs')
        //     .then((res) => {
        //         let template = Handlebars.compile(source);

        //         $('#root').html(template(townsData));
        //         $('#towns').val('');
        //     });
    }
}