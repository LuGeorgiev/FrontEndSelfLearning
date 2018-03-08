function solve() {
    class Product {
        constructor(prodType, name, price) {
            this._prodType = prodType;
            this._name = name;
            this._price = price;
        }
        get prodType() {
            return this._prodType;
        }
        get name() {
            return this._name;
        }
        get price() {
            return this._price;
        }
    }

    class ShoppingCart {
        constructor() {
            this._products = [];
        }
        get products() {
            return this._products;
        }
        add(product) {
            this.products.push(new Product(product.prodType, product.name, product.price));
            return this; //to provide chaining
        }
        remove(product) {
            const index = this.products.findIndex(p => p.name === product.name &&
                p.prodType === product.prodType && p.price === product.price)
            if (index < 0) {
                throw 'Product not find';
            }
            this.products.splice(index, 1);
            return this;
        }
        showCost() {
            return this.products.reduce((cost, product) => cost + product.price, 0);

        }
        showProductTypes() {
            const uniqueTypesObj = {} //asociative array
            this.products.forEach(p => uniqueTypesObj[p.prodType] = true);
            return Object.keys(uniqueTypesObj).sort(); //obj keys returns array from keys

        }
        getInfo() {

            const groupedByName = {}
            this.products.forEach(p => {
                if (groupedByName.hasOwnProperty(p.name)) {
                    groupedByName[p.name].quantity += 1;
                    groupedByName[p.name].totalPrice += p.price;
                } else {
                    groupedByName[p.name] = {
                        name: p.name,
                        quantity: 1,
                        totalPrice: p.price
                    };
                }
            });
            return {
                products: Object.values(groupedByName).sort(x => x.nama),
                totalPrice: this.showCost()
            };
        }
    }
    return {
        Product: Product,
        ShoppingCardt: ShoppingCardt
    }
}

const result = solve();
const cart = result.ShoppingCart()
cart.add(result.Product('sweet', 'Milka', 2))
    .add(result.Product('sweet', 'KumaLisa', 4))
    .add(result.Product('drink', 'Vodka', 4))
    .add(result.Product('fruit', 'aple', 3))
    .add(result.Product('fruit', 'pineapple', 4));
console.log(cart.products);
console.log(cart.showProductTypes());