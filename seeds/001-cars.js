exports.seed = async function(knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
    { VIN: "GIO4EVJ23", make: "Nissan", model: "Fiesta", mileage: "100" },
    { VIN: "E32HG0EIS", make: "Toyato", model: "Beetle", mileage: "200" },
    { VIN: "XNVJSKSIW", make: "Renault", model: "Mulsanne", mileage: "400" },
    {
      VIN: "PDKNDKW56",
      make: "Mercedes",
      model: "Continental",
      mileage: "700"
    },
    { VIN: "WSVDHD46S", make: "Volvo", model: "SClass", mileage: "150" },
    { VIN: "PWIDURBVI", make: "Peugeot", model: "Flying Spur", mileage: "467" }
  ]);
};
