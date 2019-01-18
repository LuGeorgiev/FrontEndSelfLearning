$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        //Need server install otherwise CORS do not let use this source
        // let source = $.get('catTemplate.hbs')
        //     .then((res) => {
        //         let template = Handlebars.compile(res);
        //         $('#allCats').html(template({ cats }));
        //         
        //     });
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);
        $('#allCats').html(template({ cats }));

        Array.from($('button'))
            .forEach((btn) => $(btn).on('click', showHideInfo));

        //Second way
        // $('button')
        //     .each((i, btn) => $(btn).on('click', showHideInfo));

        function showHideInfo() {
            console.log(this.parentNode);
            let btn = $(this);
            if (btn.text() === 'Show status code') {

                btn.next().css('display', 'block');
                btn.text('Hide status code');
            } else {

                btn.next().css('display', 'none');
                btn.text('Show status code');
            }

        }
    }

})