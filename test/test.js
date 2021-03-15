// const axios = require("axios");

// axios
//   .get("http://localhost:8070/profiles/test-api/604eb3e779354e2adc1b6433")
//   .then((response) => {
//     //console.log(response.data);
//     let x = JSON.parse(response.data.datasetObject);
//     console.log(x);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
