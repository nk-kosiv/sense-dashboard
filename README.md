# Sensor-dashboard App
Test app to display sensors information on the dashboard

# Project setup
In the project directory, you can run `npm i` to install all dependency

### Environmental variables
To be able to fetch data from external API access token should be set in .env files in root directory
Example:
```
REACT_APP_BEARER_TOKEN=your-token-here
``` 
### To start the project run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

# Important !
If you serving with `npm start`, you will see duplicated `console.log` and requests as it executes code in two places, to avoid this you can run `npm run build` in root folder and than use live server to serve the production version.

## App screenshot
<img width="1503" alt="image" src="https://user-images.githubusercontent.com/38557835/190988292-ac2f8113-792b-4154-9c4f-d998851bd84a.png">
