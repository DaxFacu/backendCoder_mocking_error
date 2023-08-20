import CartMongo from "../DAO/mongo/carts.mongo.js";

class CartsService {
  getAllCarts = async () => {
    const carts = await CartMongo.getAllCarts();
    return carts;
  };

  createCart = async () => {
    const cartCreated = await CartMongo.createCart({
      products: [],
      quantity: 0,
    });
    return cartCreated;
  };

  findCart = async (id) => {
    const cartFind = await CartMongo.findCart(id);
    return cartFind;
  };

  updateCart = async (cid, products) => {
    const cartUpdated = await CartMongo.updateCart(cid, products);
    return cartUpdated;
  };

  deleteProductsCard = async (cid) => {
    const deleted = await CartMongo.deleteProductsCard(cid);
    return deleted;
  };

  deleteCard = async (cid) => {
    const deleted = await CartMongo.deleteCard(cid);
    return deleted;
  };
}

//   async deleteProductCard(cid, pid) {
//     const deletedProduct = await CartModel.findOneAndUpdate({
//       cid,
//       "products.pid": pid,
//     });
//     return deletedProduct;
//   }
// }

export const cartsService = new CartsService();
