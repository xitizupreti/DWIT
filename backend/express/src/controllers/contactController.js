import { Contact } from "../schema/model.js";

export let createContact = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await Contact.create(data);
    res.json({
      success: true,
      message: "Contact created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllContact = async (req, res, next) => {
  let limit = req.query.limit;
  let page = req.query.page;
  try {
    let result = await Contact.find({})
      .select("fullName -_id")
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({
      success: true,
      message: "Contact get successfully",
      result: result,
    });
  } catch {
    res.json({
      success: false,
      message: "failed to get data",
    });
  }
};

export let readContactById = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Contact.findById(id);
    res.json({
      success: true,
      message: "Contact get successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateContact = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let result = await Contact.findByIdAndUpdate(id, data, { new: true });
    res.json({
      success: true,
      message: "Contact updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteContact = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Contact.findByIdAndDelete(id);
    if (result === null) {
      res.json({
        success: false,
        message: "Contact does not exist",
      });
    } else {
      res.json({
        success: true,
        message: "Contact deleted successfully",
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
