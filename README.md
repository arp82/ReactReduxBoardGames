# ReactReduxBoardGames

Base repo which I am using as a template to start fiddling around with Redux and React. This is a very simple application that displays a list of board games from the server along with some data and stats for each game. The backend side is being provided by a very simple JSON server.

IMPORTANT: the application uses Google Maps API. Currently, this dependency has being adding old-school style as a <script> in the entry point for the app (index.html). In order to render Google Maps properly, it is necessary to replace the INSERT_YOUR_API_KEY_HERE with a valid Google API key with access rights for Google Maps JS API. The application can be run without this step nonetheless, but the corresponding maps will not be rendered/shown.

# Running the app
- Install the NPM dependencies
```
> npm install
```
- Run JSON server (or similar backend) on localhost and port 3007 (install if necessary)
```
> npm install -g json-server
> json-server --watch db.json --port 3007
```
- Start application (running on localhost, port 8080)
```
> npm start
```
