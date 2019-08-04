parseInt("1");
parseFloat("1.45");

const jsonString = `{"array":[1,2,3],"boolean":true,"null":null,"number":123,"object":{"a":"b","c":"d","e":"f"},"string":"Hello World"}`;
const jsonObject = JSON.parse(jsonString);
JSON.stringify(jsonObject);

parseFloat("abc") // returns NaN
isNaN("abc") // returns true
isNaN("124") // returns false