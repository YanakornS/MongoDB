
// Select the database to use.
use('mongodbVSCodePlaygroundDB');


// Print a message to the output window.
// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db
  .getCollection("sales")
  .find({
    date: { $gte: new Date("2014-04-04"), $lt: new Date("2014-04-05") },
  })
  .count();


console.log(`${salesOnApril4th} sales occurred in 2014.`);




/* 
db.getCollection("sales").aggregate([
  {
    $group: {
      _id: "$item",
      totalQuantity: { $sum: "$quantity" },
    },  
  },
  {
    $sort: { totalQuantity: -1 },
  },
  {
    $limit: 3,
  },
  {
    $project: {
      _id: 0,
      _id: "$_id",
      totalQuantity: 1,
    },
  },
]);
 */