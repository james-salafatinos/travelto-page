const axios = require("axios");

axios
  .get("http://localhost:8080/6054fa744d26aa6c78399ce9")
  .then((response) => {
    //console.log(response.data);

    let x = response.data;
    let y = response.data.datasetObject;
    console.log(y);
    console.log(typeof y);
  })
  .catch((error) => {
    console.log(error);
  });
