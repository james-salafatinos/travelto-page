const axios = require("axios");

axios
  .get("http://localhost:8080/profiles/test-api/604eb3e779354e2adc1b6433")
  .then((response) => {
    //console.log(response.data);
    let x = JSON.parse(response.data.datasetObject);
    console.log(x);
  })
  .catch((error) => {
    console.log(error);
  });
