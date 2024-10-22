// Select the database to use.
use('mongodbVSCodePlaygroundDB');

db.getCollection("sales").aggregate([
  // Project to show specific fields and calculate total sales per item
  {
    $project: {
      _id: 0,
      item: 1,
      quantity: 1,
      totalSaleAmount: { $multiply: ["$price", "$quantity"] },
    },
  },
  // Sort by totalSaleAmount in descending order
  {
    $sort: { totalSaleAmount: -1 },
  },
]);
