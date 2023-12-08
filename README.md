# FurniReality

Furnireality is web application that allows users to view 3D models in an Augmented Reality scene.

## Features

The application consists of simple functionalities such as:
  1. List of items.
  2. Sorting.
  3. View single item details.
  4. Navigate to a PlayCanvas application.

The PlayCanvas application takes input model properties such as name, position and scale and dynamically renders the model entity in 3D view. With a button click users can switch to view the rendered model in AR scene - using a camera to immerse and interact with the models in the our surroundings.
The application consits of the following features:
  1. Extract input parameters from the URL query string; input data includes: model name, 3D vector position, rotation and scale values, and a lists of colors. 
  2.  Load 3D model in the AR scene.
  3. Position, rotate, and scale model appropriately.
  4. Change color and textures of rendered models.

The PlayCanvas source code can be found at https://playcanvas.com/project/1151377/overview/furnireality

## Resources

The 3D models are downloaded from [cgtrader](https://www.cgtrader.com/) for educational purposes only.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

The application is deployed to an AWS EC2 Instance that is currently not running. 
