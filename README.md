# travelto.page

textshare, free and easy. Share text files (txt, csv, or json) between humans and between computers. Inclusive of computer humans.

To find a page,

- go to: travelto.page/6054d9e0f05fd83ad8fe2afe

To create a page,

- go to: https://travelto.page/
- or send a POST request to https://travel.to/api/


Computers
```import pandas as pd 
import requests
import json

r = requests.get('http://localhost:8080/60550510c6f4667c882b7c72')
data = r.text
db = json.loads(data)```

## Features

## Demo

## About

## Development

Installation for local development
Run git clone https://github.com/james-salafatinos/webcam-ml.git in your desired directory
Run npm install -i to install the dependencies
Run npm start to initiate the server listening at http://localhost:8080/

## Architecture

## Todo

-
