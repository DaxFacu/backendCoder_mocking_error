import ProductsMongo from "../DAO/mongo/products.mongo.js";

class ProductsService {
  getAllProducts = async () => {
    const products = await ProductsMongo.getAllProducts();
    return products;
  };

  async createProduc(
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnail,
    id
  ) {
    console.log(title);
    const productCreated = await ProductsMongo.createProduct(
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail,
      id
    );
    return productCreated;
  }

  updateProduct = async (
    id,
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnail
  ) => {
    const productUpdated = await ProductsMongo.updateProduct(
      id,
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
      thumbnail
    );
    return productUpdated;
  };

  deleteProduct = async (id) => {
    const deleted = await ProductsMongo.deleteProduct(id);
    return deleted;
  };
}

export const productsService = new ProductsService();
