/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
	let totalsByCategory = {};


	for(transaction of transactions){
		let category = transaction.category;
		let price = transaction.price;

		if(totalsByCategory[category]){
			totalsByCategory[category]+= price;
		}else{
			totalsByCategory[category]= price;
		}
	}
    let result = [];
    for(let category in totalsByCategory){
		result.push({category: category, totalSpent: totalsByCategory[category] })
   }
	
        
 return result;
}

module.exports = calculateTotalSpentByCategory;
