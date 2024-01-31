import { Product } from "../schema/model.js";

export let createProduct = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await Product.create(data);
    res.json({
      success: true,
      message: "Product created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllProduct = async (req, res, next) => {
  let limit = req.query.limit;
  let page = req.query.page;
  try {
    let result = await Product.find({})
      .select("name -_id")
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({
      success: true,
      message: "Product get successfully",
      result: result,
    });
  } catch {
    res.json({
      success: false,
      message: "failed to get data",
    });
  }
};

export let readProductById = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Product.findById(id);
    res.json({
      success: true,
      message: "Product get successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProduct = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let result = await Product.findByIdAndUpdate(id, data, { new: true });
    res.json({
      success: true,
      message: "Product updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Product.findByIdAndDelete(id);
    if (result === null) {
      res.json({
        success: false,
        message: "Product does not exist",
      });
    } else {
      res.json({
        success: true,
        message: "Product deleted successfully",
        result: result,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
