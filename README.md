# ANIMOV

## Table of Contents

* [Name](#ANIMOV)
* [Description](#Description)
* [Requirements](#Requirements)
* [Run The App](#Run_The_App)
* [Challenges](#Challenges)
* [Release](#Release)
* [Contributing](#Contributing)

## ANIMOV

ANIMOV is a React Native Mobile app for animation movies

## Description

**ANIMOV** is an React Native Mobile application that provides HD animation movies that users can download very easy.
Also, I developed a website using a React app that provides tha admin with an awesome [page](https://animove.netlify.com/#/add-movie) to add new movies to his website.

## Requirements

To run this app on your **device** or **emulator** there are some dependencies you have to install first. These **dependencies** are:

* [ ` node ` ](https://nodejs.org/en/)  

    You should download it and install on your machine.

* [ ` redux ` ](https://www.npmjs.com/package/redux)  

    A great standalone tool to manage **state change** and decreases **components coupling** .

* [ ` react-redux ` ](https://www.npmjs.com/package/react-redux)  

    Since ` redux ` 
    is a standalone tool that is not dedicated to **React JS**, we need another package to hook it within a **React JS** app and here ` react-redux ` 
    comes to the scene.

* [ ` firebase ` ](https://firebase.google.com/)  

    Firebase helps mobile and web app teams succeed

* [ ` react-bootstrap ` ](https://react-bootstrap.github.io/)  

    **React bootstrap** replaces the Bootstrap javascript. Each component has been built from scratch as a true **React** component, without unneeded dependencies like jQuery.

* [ ` react-router-dom ` ](https://www.npmjs.com/package/react-router-dom)

    React Router is the most popular routing library for React. It allows you define routes in the same declarative style:

``` js
    < Route path = "/home" component = {Home} />
```

## Run_The_App

To install all **dependencies** use your **Command Line** to browse to the project folder and hit:

``` bash
    npm install
```
    
then hit the next command to run the app:
``` bash
    npm start 
```

## Challenges

There were some challenges but most of them was not that difficult. There were two big challenges:
1. to add the name of movies to the URL as: *https://animove.netlify.com/?#/reign-of-the-supermen* so used an advanced topic in React Routing that is to pass the **path** as a parameter, 
```r
<NavLink to={pathTO} > </ NavLLink>
<Route path='/:movieName' exact component={ViewDetails} />
```

2. to reuse some components that would have different styling when used in different places. so passed parameters to this reusable components and according to this parameters these components will have different CSS classes and styling: 
``` js
<div className={props.review ? classes.CardAsRewiew : null + ' col-10 mx-auto col-md-4 col-lg-3 pb-5 item-align-center'} >
```

## Release 

The application has been deployed to Github and can be found [here](https://animove.netlify.com/?#/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

