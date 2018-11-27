const obj = {
    name: "Peshp",
    moveis: ["Game of Thrones", "Venom", "Alone"],
    printMovies: function() {
        const that = this;

        this.moveis.forEach(function(movie) {
            console.log(`${that.name}has wathched ${movie}`);
        });
    }
}; //this is reffering the global scope and is undefined

obj.printMovies();

//arrow functions KEEP this and arguments are missing
const arrow = {
    name: "Pesho",
    moveis: ["Game of Thrones", "Venom", "Alone"],
    printMovies: function() {
        this.moveis.forEach((movie) => {
            console.log(`${this.name} wathched ${movie}`);
        });
    }
};
arrow.printMovies();