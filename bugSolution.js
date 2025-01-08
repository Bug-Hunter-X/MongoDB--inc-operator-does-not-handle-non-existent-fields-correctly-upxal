```javascript
// Correct usage of $inc operator
db.collection.updateOne({ name: "John", age: { $exists: true } }, { $inc: { age: -1 } });
//Alternatively, use the $setOnInsert operator to initialize the field if it does not exist
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 }, $setOnInsert: { age: 0 } });
```