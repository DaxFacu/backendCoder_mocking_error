import { cartsService } from "../services/carts.service.js";
import CustomError from "../services/errors/custom-error.js";
import EErrors from "../services/errors/enums.js";

class CartsController {
  Create = async (req, res) => {
    const cart = req.body;
    const createCart = cartsService.createCart();
    if (createCart) {
      return res.status(201).json({
        msg: "Carrito creado ",
        data: {},
      });
    } else {
      CustomError.createError({
        name: "Cart creation error",
        cause: "",
        message: "Error trying to create cart",
        code: EErrors.CREATE_CART_ERROR,
      });
      // return res.status(400).json({
      //   msg: "No se pudo crear el carrito",
      //   data: {},
      // });
    }
  };

  GetAll = async (req, res) => {
    try {
      const getCart = await cartsService.getAllCarts({});

      return res.status(201).json({
        status: "success",
        msg: "Get cart",
        data: getCart,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };

  Find = async (req, res) => {
    try {
      const { cid } = req.params;

      const getCart = await cartsService.findCart(cid);

      return res.status(201).json({
        status: "success",
        msg: "Get cart",
        data: getCart,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };

  Update = async (req, res) => {
    try {
      const { cid } = req.params;
      const { products } = req.body;

      console.log(products);
      const cartUptaded = await cartsService.updateCart(cid, products);
      return res.status(201).json({
        status: "success",
        msg: "product uptaded",
        data: cartUptaded,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };

  Delete = async (req, res) => {
    try {
      const { cid } = req.params;

      const deleteCard = await cartsService.deleteCard(cid);

      return res.status(201).json({
        status: "success",
        msg: "delete card",
        data: deleteCard,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }
  };
}

export const cartsController = new CartsController();
