```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000000")},{"$inc":{"field":1},"$setOnInsert":{"field":0}});
```