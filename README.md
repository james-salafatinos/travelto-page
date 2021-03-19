# Travelto.page

textshare, free and easy. Share text files (txt, csv, or json) between humans and between computers. Inclusive of computer humans.

To find a page,

- On a browser, go to: travelto.page/6054d9e0f05fd83ad8fe2afe
- Or in access via Python
```
import pandas as pd 
import requests
import json

r = requests.get('http://travelto.page/60550510c6f4667c882b7c72')
data = r.text
db = json.loads(data)
```

To create a page,

- go to: https://travelto.page/
- or send a POST request to https://travel.to/api/

## Development
Requirements:
1. Register for a free MongoDB (https://www.mongodb.com/) account and get a connection URI.

3. Clone the repository into a NodeJS enabled environment
4. Install the repository in preferred folder
5. Create a file in the root directory called ```.env```
6. Use the template below and paste the URI of the free MongoDB URI
```
#May look like: beachball@cluster0.dsdew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
DB_URI=""
```
8. Run server
```
git clone https://github.com/james-salafatinos/travelto-page.git in your desired directory
npm install -i to install the dependencies
npm start
```
This initiate the server listening at http://localhost:8080/.
2. Create a file in th


## Todo

-
