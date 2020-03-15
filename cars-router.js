const express = require("express");

//Knex instance:
const db = require("./data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");
    res.json(cats);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("cars")
      .where({ id })
      .first();
    res.json(car);
  } catch (error) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCar = await db("cars").where({ id });
    res.status(201).json(newCar);
  } catch (error) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const carData = req.body;
    await db("cars")
      .where("id", req.params.id)
      .update(carData);
    const car = await db("cars").where("id", req.params.id);
    res.json(car);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
