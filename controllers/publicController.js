const { Item, User, Video, Art } = require("../models");
const { Sequelize, Op } = require("sequelize");
const Stock = require("../models/Stock");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function showContent(req, res) {
  const data = [];
  const items = await Item.findAll({
    include: { model: Stock, where: { stock: { [Op.gte]: 0 } } },
  });
  console.log(items);
  const videos = await Video.findAll();
  const art = await Art.findAll();

  data.push(...items, ...art, ...videos);

  let random = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  res.json(random);
}

const showProducts = async () => {
  let data = await Item.findAll();

  return data;
};

const showProductDetails = async (id) => {
  let data = await Item.findOne({
    where: { id: id },
    include: { model: Stock },
  });

  console.log(data);
  return data;
};
async function showArts(req, res) {
  const data = [];
  const art = await Art.findAll();

  data.push(...art);

  res.json(data);
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
  showProductDetails,
  showArts,
  create,
  store,
  edit,
  update,
  destroy,
};
