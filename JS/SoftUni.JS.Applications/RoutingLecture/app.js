const app = Sammy('#welcome', function() {
    this.get('#/home', function() {
        this.swap('<h2>')
    })
});
$(() => app.run());