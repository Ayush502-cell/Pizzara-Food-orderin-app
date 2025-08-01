import Product from '../models/product.js';
import makeNetworkCall from './api-client.js';
const productsOperations = {
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
            return currentPizza;
        })
        console.log('Product Array',productsArray);
        return productsArray;
    },
    async sortProducts(){

    },
    async searchProducts(){

    },
}
export default productsOperations;