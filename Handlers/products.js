const express = require("express");
const dataPath = require("../products.json");
const Product = dataPath.products;

async function getProducts(req, res) {
  res.send(Product);
}

async function createProduct(req, res) {
  let productData = req.body;
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
  // console.log(ip);

  Product.push(productData);
  res.send(`Product added into List and your ip is ${ip}`);
}

async function patchProduct(req, res) {
  const productData = req.body;
  const { id: productId } = req.params;

  return res.send("Your data Updated");
}

async function deleteProduct(req, res, next) {
  const { id: productId } = req.params;
  return res.send("Product deleted successfully.");
}

module.exports = {
  getProducts,
  createProduct,
  patchProduct,
  deleteProduct,
};
