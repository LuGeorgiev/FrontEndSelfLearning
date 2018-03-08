function solve() {
    function getProduct(prodType, name, price) {
        return {
            prodType: prodType,
            name: name,
            price: price
        };

        // get prodType() {
        //     return this._prodType;
        // }
        // set prodType(s) {
        //     if (typeof s !== 'string' || s.length === 0) {
        //         throw new Error('Product type have to be string with length more than 0');
        //     }
        //     this._prodType = s;
        // }

        // get name() {
        //     return this._name;
        // }
        // set name(n) {
        //     if (typeof n !== 'string' || n.length === 0) {
        //         throw new Error('Name have to be string with length more than 0');
        //     }
        //     this._name = n;
        // }

        // get price() {
        //     return this._price;
        // }
        // set price(p) {
        //     if (typeof p !== 'Number' || p < 0) {
        //         throw new Error('Price have to be positive number');
        //     }
        //     this._price = p;
        // }
    }

    function getShoppingCart() {
        const products = [];

        function add(product) {
            products.push(getProduct(product.prodType, product.name, product.price));
            return this; //to provide chaining
        }

        function remove(product) {
            const index = products.findIndex(p => p.name === product.name &&
                p.prodType === product.prodType && p.price === product.price)
            if (index < 0) {
                throw 'Product not find';
            }
            products.splice(index, 1);
            return this;
        }

        function showCost() {
            return products.reduce((cost, product) => cost + product.price, 0);

            // let pr=0;                        //iterration way
            // for (const prod of products) {
            //     pr+=prod.price;
            // }
            // return pr;

        }

        function showProductTypes() {

            // const uniqueTypes = [];    //first way
            // for (const p of products) {
            //     if (uniqueTypes.indexOf(p.prodType) < 0) { // if this type still not exist
            //         uniqueTypes.push(p.prodType);
            //     }
            // }

            // products.forEach(function(p) {                  //second way
            //     if (uniqueTypes.indexOf(p.prodType) < 0) {
            //         uniqueTypes.push(p.prodType);
            //     }
            // });

            // return products.map(p => p.prodType) //this way every array member is visited twice
            //     .sort()                          //Third way
            //     .filter((p, i, ps) => i === 0 || p !== ps[i - 1]); // -1 index is undefined and is different, then added to array

            const uniqueTypesObj = {} //asociative array
            products.forEach(p => uniqueTypesObj[p.prodType] = true);
            return Object.keys(uniqueTypesObj).sort(); //obj keys returns array from keys

            //const uniqueTypes = [];
            // for (const type in uniqueTypesObj) {  //second way for previous
            //     uniqueTypes.push(type);
            // }
            // return uniqueTypes.sort();
        }


        function getInfo() {
            /*
            const uniqueNames = products.map(p => p.name) //to many array iterrations
                .sort()
                .filter((p, i, ps) => i == 0 || p !== ps[i - 1]) //all unique sorted names are here
                .map(name => {
                    const withTHisNames = products.filter(p => p.name == name);
                    return {
                        name: name,
                        quantity: withTHisNames.length,
                        totalPrice: withTHisNames.reduce((cost, prod) => cost + prod.price, 0)
                    };
                });
                return {
                    products: uniqueNames,
                    totalPrice: showCost()
                }
            */
            const groupedByName = {}
            products.forEach(p => {
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
                totalPrice: showCost()
            };


        }

        return {
            products: products,
            add: add,
            remove: remove,
            showCost: showCost,
            showProductTypes: showProductTypes,
            getInfo: getInfo
        };
    }
    return {
        getProduct: getProduct,
        getShoppingCart: getShoppingCart
    };
}

const result = solve();
const cart = result.getShoppingCart()
cart.add(result.getProduct('sweet', 'Milka', 2))
    .add(result.getProduct('sweet', 'KumaLisa', 4))
    .add(result.getProduct('drink', 'Vodka', 4))
    .add(result.getProduct('fruit', 'aple', 3))
    .add(result.getProduct('fruit', 'pineapple', 4));
console.log(cart.products);
console.log(cart.showProductTypes());