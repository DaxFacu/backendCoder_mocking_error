import express from "express";
import { cartsController } from "../controllers/carts.controllers.js";

export const routerCarts = express.Router();

routerCarts.use(express.json());
routerCarts.use(express.urlencoded({ extended: false }));

// const cartManager = new CartManager("cart.json");

routerCarts.post("/", cartsController.Create);

routerCarts.get("/", cartsController.GetAll);

routerCarts.get("/:cid", cartsController.Find);

routerCarts.put("/:cid", cartsController.Update);

// routerCarts.delete("/api/carts/:cid", async (req, res) => {
//   try {
//     const { cid } = req.params;

//     const deleteProductsCard = await cartsService.deleteProductsCard(cid);

//     return res.status(201).json({
//       status: "success",
//       msg: "Get cart",
//       data: deleteProductsCard,
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({
//       status: "error",
//       msg: "something went wrong :(",
//       data: {},
//     });
//   }
// });
routerCarts.delete("/:cid", cartsController.Delete);

//routerCarts.purchase("/:cid/purchase", cartsController.Purchase);
