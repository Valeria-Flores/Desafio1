let id = 0;
class ProductManager{
    constructor(){
       this.products=[];
       this.sumId = 1;
    }
    // métodos
    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Error: favor de llenar todos los campos");
            return;
        }
        if(this.products.some(product => product.code === code)){
            console.log("Error: el código ", code, " ya se encuentra registrado.")
            return;
        }
        const newProduct = {
            id: this.sumId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const foundProduct = this.products.find(product => product.id === id)
        if(foundProduct){
            return foundProduct;
        }
        else{
            return "Producto no encontrado"
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();
console.log(productManager.getProducts()); // Arreglo vacío

productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25); 
console.log(productManager.getProducts()); // Producto prueba

productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25); // Codigo registrado

productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "nfg345"); // Campo vacio


console.log(productManager.getProductById(50)) // Producto no encontrado
console.log(productManager.getProductById(1)) // Producto prueba