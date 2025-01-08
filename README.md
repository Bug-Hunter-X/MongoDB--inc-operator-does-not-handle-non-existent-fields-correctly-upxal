# MongoDB $inc operator bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment or decrement a numerical field in a document. However, if the field does not exist, it may not behave as expected. This repository shows how to solve this issue.

## Bug Description
The bug is that the `$inc` operator does not throw an error if the field does not exist, which can lead to unexpected behavior. For example, if a document does not have an age field, the following code will set the age field to -1 instead of throwing an error:

```javascript
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
```

## Bug Solution
The solution is to check if the field exists before attempting to increment or decrement it. If the field does not exist, the code can be modified to handle this case appropriately. For example, the following code will only increment or decrement the age field if it exists:

```javascript
db.collection.updateOne({ name: "John", age: { $exists: true } }, { $inc: { age: -1 } });
```

This code only updates documents with an existing age field, avoiding the issue of setting the field to -1 if it doesn't exist.