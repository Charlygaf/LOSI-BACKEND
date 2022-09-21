const { SkateItem, ClothingItem, User, Video, Art } = require("../models");
const { Sequelize, where } = require("sequelize");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function showContent(req, res) {
  const data = [];
  const skateItems = await SkateItem.findAll({ where: { stock: true } });
  const clothing = await ClothingItem.findAll({ where: { stock: true } });
  const videos = await Video.findAll();
  const art = await Art.findAll();

  data.push(...skateItems, ...clothing, ...art);

  let random = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  res.json(random);
}

async function showProducts(req, res) {
  const data = [];
  const skateItems = await SkateItem.findAll({ where: { stock: true } });
  const clothing = await ClothingItem.findAll({ where: { stock: true } });
  data.push(...clothing);
  data.push(...skateItems);

  res.json(data);
  console.log(data);
}

async function showArts(req, res) {
  const data = [];
  const art = await Art.findAll();

  data.push(...art);

  res.json(data);
  console.log(data);
}
// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  showContent,
  showProducts,
  showArts,
  create,
  store,
  edit,
  update,
  destroy,
};
