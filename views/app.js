//@help
//Checks the client side origin and sets the "Base URL" for axios API calls
if (window.location.origin == "https://webcam-ml-304019.uc.r.appspot.com") {
  var base_url = "https://webcam-ml-304019.uc.r.appspot.com";
  console.log(base_url);
} else {
  var base_url = "http://localhost:8080";
  console.log(base_url);
}

//@help
//Consolidates weights to JSON
//Makes a call to to the serverside API to add to database
async function saveToDatabase(datasetObject) {
  //Prepare Dataset for storage
  console.log("In saveToDatabase()... passing to post /add-record");
  // let datasetObject = {};
  let jsonModel = datasetObject;

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    $("#inserted-db-id").css("color", getRandomColor());
  }

  // console.log("Whats going over to mongo..", jsonModel);
  axios
    .post(
      `${base_url}/add-record`,
      {
        datasetObject: jsonModel,
      },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
    .then((result) => {
      console.log(`axios post: Add-Record Returned`);
      setRandomColor();
      document.getElementById(
        "inserted-db-id"
      ).innerText = `${result.data._id}`;
      console.log(
        "Upon call back from /add-record axios post to mongo",
        result
      );
    });

  console.log("Weights sent to DB...");
}

async function loadFromDatabase(db_uuid, classifierModel) {
  //test id: 60159f08deec565ee8da4ef2
  console.log(
    "In loadFromDatabase, fetching the axios api for a single record"
  );
  const db_promise = axios
    .get(`${base_url}/${db_uuid}`)
    .then((result) => uploadModelFromDBJSON(JSON.stringify(result)))
    .catch((err) => console.log(err));

  const uploadModelFromDBJSON = async (db_json, event) => {
    console.log("Uploading");
    console.log("Received json", db_json.model_weights);
    var db_json_parsed = JSON.parse(db_json);
    var tensorObj = JSON.parse(db_json_parsed.data.model_weights);
  };
}

const start = async () => {
  document
    .getElementById("save_to_database_button")
    .addEventListener("click", async () => getTextAndSaveToDatabase());

  document
    .getElementById("load_button")
    .addEventListener("change", (event) => uploadModel(event));

  const uploadModel = async (event) => {
    let inputModel = event.target.files;
    console.log("Uploading");
    let fr = new FileReader();
    if (inputModel.length > 0) {
      fr.onload = async () => {
        var datasetObject = fr.result;
        // var datasetObject = JSON.parse(dataset);
        saveModelToDatabase(datasetObject);
      };
    }
    await fr.readAsText(inputModel[0]);
    console.log("Uploaded");
  };

  const saveModelToDatabase = async (datasetObject) => {
    console.log("In savedModelToDatabase()... Passing to saveToDatabase()");
    saveToDatabase(datasetObject);
  };

  function getTextAndSaveToDatabase(event) {
    let dataTextObject = document.getElementById("input-label").value;
    saveModelToDatabase(dataTextObject);
  }

  const initializeElements = () => {
    async function getCodeNameAndTriggerDBRetrieve(classifierModel) {
      //Get Code Name
      let db_uuid = document.getElementById("uuid-for-db").value;
      console.log("In getCodeNameandRetrieve... db_uuid: ", db_uuid);

      //Trigger DB Call
      loadFromDatabase(db_uuid, classifierModel);
    }
  };

  await initializeElements();
};
window.onload = () => {
  start();
};
