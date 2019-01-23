/*jshint esversion:6*/
function startApp() {
    const templates = {};

    // Attach click events
    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#buttonLoginUser').click(login);
        $('#buttonRegisterUser').click(register);
        $('#linkLogout').click(logout);
        $('#buttonCreateAd').click(createAd);
        $('.notification').click(function() {
            $(this).hide();
        });
        showView('viewHome');
    })();



    if (localStorage.getItem('authtoken') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }



    function handleError(reason) {
        showError(reason.responseJSON.description);
    }



    // Shows only the correct links for a logged in user
    function userLoggedIn() {
        let span = $('#loggedInUser');
        let username = localStorage.getItem('username');
        span.text(`Wellcome ${username}`);
        span.show();

        $('#linkHome').show();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();

        $('#linkLogin').hide();
        $('#linkRegister').hide();
    }

    // Shows only the correct links for an anonymous user
    function userLoggedOut() {
        let span = $('#loggedInUser');
        span.text('');
        span.hide();

        $('#linkHome').show();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }

    async function loadTemplates() {
        const [adsCatalogTemplate, adBoxTemplate] = await Promise.all([
            $.get('./templates/ads-catalog.html'),
            $.get('./templates/ad-box-partial.html')
        ]);

        templates['catalog'] = Handlebars.compile(adsCatalogTemplate);
        Handlebars.registerPartial('adBox', adBoxTemplate);
    }
    loadTemplates();

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();

        if (viewName === 'viewAds') {
            loadAds();
        }
    }

    function navigateTo() {
        $('section').hide();
        let target = $(this).attr('data-target');
        showView(target);
    }

    // Saves username/id/authtoken to local storage
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    // Logs in the user
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', 'login', 'basic', { username, password });
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully logged in!');
        } catch (e) {
            handleError(e);
        }
    }

    // Register a user
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', '', 'basic', { username, password });
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully registered!');
        } catch (e) {
            handleError(e);
        }
    }

    // Logout a user
    async function logout() {
        try {
            await requester.post('user', '_logout', 'kinvey', { authtoken: localStorage.getItem('authtoken') });
            localStorage.clear(); // Clears all session storage on logout
            userLoggedOut();
            showView('viewHome');
            showInfo('Logout successful!')
        } catch (e) {
            handleError(e);
        }
    }

    // Load all ads
    async function loadAds() {
        let content = $('#content');
        let adds = await requester.get('appdata', 'adverts');
        ads.forEach(a => {
            if (a._acl.creator === localStorage.getItem('id')) {
                a.isAuthor = true;
            }
        });
        let context = {
            ads
        };
        let html = templates['catalog'](context);
        content.html(html);
        let editBtn = $(content).find('.edit');
        let deleteBtn = $(content).find('.delete');
        editBtn.click(openEditAdd);
        deleteBtn.click(deleteAdd);
    }

    // Create an add
    async function createAd() {

        let form = $('#formCreateAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let imgUrl = form.find('input[name="imageUrl"]').val();
        let publisher = localStorage.getItem('username');
        if (title.length === 0) {
            showError('Title cannot be empty!');
            return;
        } else if (price.length === 0) {
            showError('Price cannot be 0 !');
            return;
        }

        let newAd = {
            title,
            description,
            imageUrl,
            price,
            publisher
        };
        try {
            await requester.post('appdata', 'adverts', '', newAd);
            showView('viewAds');
            showInfo('Ad create!');

            $('#formCreateAd').reset();
            // form.find('textarea[name="description"]').val('');
            // form.find('input[name="price"]').val('');
            // form.find('input[name="title"]').val('');
            // orm.find('input[name="imageUrl"]').val('');

        } catch (error) {
            handleError(error);
        }
    }

    // Delete an add
    async function deleteAd() {

    }

    // Edit an add
    async function editAd(id, publisher, date) {

    }

    // Open edit add view
    async function openEditAdd() {

    }
}