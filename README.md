# Unexpected behavior using the $inc operator in MongoDB
This repository demonstrates an uncommon error that can occur when using the `$inc` operator in MongoDB if the target field does not exist or if the value is not a number.
The `bug.js` file shows the incorrect usage of the `$inc` operator.  The `bugSolution.js` file provides the correct solution.
## Problem
The `$inc` operator is designed to increment a numeric field by a specified value. If the field does not exist, it creates the field and sets it to the specified value. However, if the field is not of a numeric type or if the value is not a number, it can result in unexpected behavior or errors.
## Solution
To resolve this, you should ensure that the field exists and is of numeric type before using `$inc`.  You can use the `$setOnInsert` operator to create the field with a default value if it does not exist or use a conditional update to check the field's type before incrementing it.