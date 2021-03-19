# Travelto.page

<<<<<<< HEAD
Simple textshare, free and easy. Share simple text between humans and between computers. Inclusive of computer humans.
=======
## Simple textshare, free and easy. Share raw text data between humans and between computers. Inclusive of computer humans.
>>>>>>> 2150b9ed68f834537003b32c1a733ebaa0ffdd19


<<<<<<< HEAD
- Go to: travelto.page/6054d9e0f05fd83ad8fe2afe
=======
## Features
- Access via browser or via HTTP 
- Authentication-less model *save*! Who wants to create an account? Not me... just copy the UUID and save it somewhere!
- Authentication-less model *load*! Send the UUID of your trained model to your friends and have them load it! Great for memes.
>>>>>>> 2150b9ed68f834537003b32c1a733ebaa0ffdd19

## Usage

<<<<<<< HEAD
- Human: go to: https://travelto.page/
- Computer: or send a POST request to https://travel.to/api/

Computers

````import pandas as pd
import requests
import json

r = requests.get('http://localhost:8080/60550510c6f4667c882b7c72')
data = r.text
db = json.loads(data)```
=======
### To find a page,
>>>>>>> 2150b9ed68f834537003b32c1a733ebaa0ffdd19

- On a browser, go to: http://travelto.page/605510527ab1e1001200aabb/
- Or in access via Python
```
import pandas as pd 
import requests
import json

r = requests.get('http://travelto.page/605510527ab1e1001200aabb')
data = r.text
db = json.loads(data)
```

### To create a page,

- go to: https://travelto.page/
- or send a POST request to https://travel.to/api/



<<<<<<< HEAD
## Todo
````
=======
## Development
Requirements:
1. Register for a free MongoDB (https://www.mongodb.com/) account and get a connection URI.

3. Clone the repository into a NodeJS enabled environment
4. Install the repository in preferred folder
5. Create a file in the root directory called ```.env```
6. Use the template below and paste the URI of the free MongoDB URI into ```.env```
```
DB_URI=""
```
8. Run server
```
git clone https://github.com/james-salafatinos/travelto-page.git in your desired directory
npm install -i to install the dependencies
npm start
```
This will initiate the server listening at http://localhost:8080/

>>>>>>> 2150b9ed68f834537003b32c1a733ebaa0ffdd19
