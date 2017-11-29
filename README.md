### My React Journey  Samples with react 0.16

This is a react based application where we are creating some sample components and displaying the UI with the help of **MUICSS** library components. 

## Steps
1. Clone the Project
2. Make sure that webpack is installed globally "npm install -g webpack" or "yarn global add webpack"
3. Run "npm install http-server -g" so that we can run our react application with the bundled JS (by webpack) and html file. 
3. run npm install
4. run 'webpack' so that webpack can monitor and build the files at run-time.
5. run "http-server" in the dist folder (in another shell/window) 
6. open http://localhost:8080 and it will display a sample application. 
  Image 1: 
   [](https://github.com/panbhatt/ReactTutBookSearch/blob/master/images/initial_image.JPG "Application")

Click around to play with the various functionality available. 

- Search something in the search box based upon the title
- Edit a specific Book present in the table. 
- Update the data regarding a specific book. 
- Add a new book in the table. 
- Delete an existing book in the table. 

### Code files Description  ###
1. **App.js **-> This is the main reactjs file and everything is being loaded by this file. 
2. **data.js** -> Since we are maintaing the state at our root component home.js, this file will contain sample data that would be used initially to display the records in the table. 
3. **home.js** ( in components/container) is our Root Component and contain all the other child components. This will contain all the functions that will be passed down the component hierachy as PROPS so that each one can use this. Since our STATE is being managed here, all these functions will apply on this state. 

### Component Description ###
- **booklist.js** - This file will contain the table component that will be displayed on the left bottom side of the sample react application. 
- **CrudBook.js** - This file will contain all the CRUD related operations on the UI like Add/Delete/Update. This is present in the right side of the application. This will selectively show Add/Update/Delete button based upon the state of the components. 
- **searchbox.js** - This component will contain the search box present on the top left of the UI to filter down the search results based upon the SEARCHTEXT entered. 

###Links:
[https://medium.com/a-beginners-guide-for-webpack-2](https://medium.com/a-beginners-guide-for-webpack-2 "WebPack  2- Begineers Guide, Good one")

[https://toddmotto.com/react-create-class-versus-component/](https://toddmotto.com/react-create-class-versus-component/ "react.createClass vs Component")

[https://mxstbr.blog/2017/02/react-children-deepdive/](https://mxstbr.blog/2017/02/react-children-deepdive/ "React Children Understanding")

###Flux: 
[https://spapas.github.io/2015/06/05/comprehensive-react-flux-tutorial/](https://spapas.github.io/2015/06/05/comprehensive-react-flux-tutorial/ "React Flux part - 1")

[https://spapas.github.io/2015/07/02/comprehensive-react-flux-tutorial-2/](https://spapas.github.io/2015/07/02/comprehensive-react-flux-tutorial-2/ "React Flux Part - 2")

[https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux "Flux with shopping Cart example")


