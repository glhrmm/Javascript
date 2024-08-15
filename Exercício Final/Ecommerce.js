class Ecommerce {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    setProductPrice(productId, price) {
      for (let product of this.products) {
        if (product.id === productId) {
          product.price = price;
          break;
        }
      }
    }
  
    getAllProducts() {
      return this.products;
    }
  
    getAllProductsNames() {
      return this.products.map(product => product.name).join(';');
    }
  
    getProductById(productId) {
      for (let product of this.products) {
        if (product.id === productId) {
          return product;
        }
      }
      return null;
    }
  
    getProductByName(name) {
      for (let product of this.products) {
        if (product.name === name) {
          return product;
        }
      }
      return null;
    }
  
    getProductsByPrice(initialPrice, finalPrice) {
      return this.products.filter(product => initialPrice <= product.price && product.price <= finalPrice);
    }
  
    addProductToCart(product) {
      this.cart.push(product);
    }
  
    getCart() {
      return this.cart;
    }
  
    getCartTotalPrice() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    }
}; 


const frutas = ("frutas");

console.log(frutas);
