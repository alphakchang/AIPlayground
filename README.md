# Alpha AI Playground

The Alpha AI Playground incorporates a variety of tools that were developed within Alpha. These tools utilize elements of machine learning and generative AI.

The latest AI related technology is constantly being researched and new tools will be added to the playground.

## How to use

Alpha AI Playground has several categories and expanding, use the dropdown located at the top of the page to select the category and see the available apps in that category.

# See below for developer notes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Once the build process is done, copy the build folder into the following location on Naga, replacing the existing build folder. (or delete the exsiting one first for a cleaner action)
C:\AI_Playground\AI_Playground

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Serve options

### `serve from server` (this is my current way)

Using express.static() to serve the static file, this is the code block inside the server

```javascript
const buildPathAIPlayground = path.join(__dirname, './build');

app.use('/', express.static(buildPathAIPlayground));

app.get('/*', (req, res) => {
	res.sendFile(path.join(buildPathAIPlayground, 'index.html'));
});
```

### `serve -s build -l ${port}`

Once the build folder has been created, it contains everything required to be hosted.
Navigate to where the build folder is located, then use the command `serve -s build` to host it, port can be configured by adding `-l` or `-listen` followed by the port number.
