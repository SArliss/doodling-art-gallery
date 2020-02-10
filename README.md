# Full Stack Doodling Art Gallery


- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Developer](#Developer)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [Challenges](#Challenges)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Reference Projects](#Reference-Projects)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


## Overview

**Doodling Art Gallery** is a fullstack application that lets you create your doodling art and send it to your virtual gallery. You can also have fun by visualizing other people's galleries. The front-end is fully responsive and created with React and HTML/CSS. The back-end is developed with Ruby on Rails and Sqlite DB to power the login, authentication and store the database gallery. 

### Developer

Created, designed and developed by Sinara Arliss on February 2020, as unit 4 project for General Assembly Software Engineering Immersive program.

## MVP

The **Doodling Art Gallery** MVP will allow users to register and login via React front-end using a Registration system of email/name/password and login using email/password. It will utilize a token-based local-login storage for persistence. As well as a fully bcrypt hashed password for security. Doodling Art Gallery is a full CRUD app and users will be able to create, update, save and delete doodles. The app will be deployed via Surge (front-end) and via Heroku (back-end).

### MVP Goals

- 2 Modeled tables: users and doodles.
- Full CRUD showcasing in the following features: 
  - Creating: Users/Doodles.
  - Posting/Updating/Deleting: doodles. 
- Users can visualize other other user's doodles but only the original user can edit, delete or update his/her own doodle.

## Challenges
- Send a svg image (xml-json) to the database then load the image again upon request. 

### Stretch Goals
- Allow two or more users to collaboratively draw on a same doodle art. 
- Different color brushes. 
- Simple chat where user's can exchange messages with their friends/other users creating a little "guess doodling game".

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Manages and control the View/Frontend._ |
|     React-router-dom      | _It contains the DOM bindings for React Router and manage browser history._ |
|   Immutable-js   | _Immutable data presents a mutative API which does not update the data in-place, but instead always yields new updated data. Immutable.js will be used to handle the complex doodle drawing lines structure. It helps to manage more complex state objects since it comes with helpers that allow deep persistent changes._ |
| Ruby/Rails | _Powers & controls the backend SQLite3 database and manages endpoints for API_ |
|     Axios      | _package for sending/receiving html requests from react to the API server_ |


### MVP Client (Front End)

#### Wireframes

Desktop Landing

![Landing page](wireframes/wf-main.png)

Desktop Personal Gallery

![Personal gallery](wireframes/personal-gallery1.png)
Mobile

Desktop Public Gallery

![Public Gallery ](wireframes/public.png)


#### Component Hierarchy

``` structure
public
|__ images/
src
|__ components/
      |__ Header.js
      |__ Footer.js
      |__ App.js
      |__ DrawArea.js
      |__ Drawing.js
      |__ DrawingLine.js
      |__ RegisterForm.js
      |__ LoginForm.js
      |__ PersonalGallery.js
      |__ PublicGallery.js
|__ services/
      |__ api_helper.js
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   y   |   y   | _Contain the logo and Login/Registration forms._               |
|  Footer  | functional |   n   |   n   | _Contact link and project info_       |
|   App    |   class    |   y   |   y   | _Powerhouse component managing and giving directions to all other components_      |
| DrawArea | class |   n   |   y   | _Class based component to handle mouse events. Inside the DrawArea, it will receive the points to draw as props._     
| Drawing | functional |   n   |   y   | _SVG logic._                |
| DrawingLine | functional |   n   |   y   | _Renders the individual lines._                |
| PersonalGallery | functional |   n   |   y   | _Renders personal doodles._                |
| PublicGallery | functional |   n   |   y   | _Renders all doodles._
|    LoginForm    | class |   y   |   y   | _Form for logging in_ |
|    RegistrationForm    | class |   y   |   y   | _Form for registering_ |


#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Forms    |    H     |     5 hrs      |     TBD     |    TBD    |
| Create CRUD Actions |    H     |     12 hrs      |     TBD     |     TBD     |
| Drawing Components |    H     |     6 hrs      |     TBD     |     TBD     |
| Galleries |    H     |     4 hrs      |     TBD     |     TBD     |
| Header |    L     |     3 hrs      |     TBD     |     TBD     |
| Footer |    L     |     2 hrs      |     TBD     |     TBD     |
| UI styling |    H     |     12 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     44 hrs      |     TBD     |     TBD     |


### MVP Server (Back End)

#### ERD Model

![Model](wireframes/erd.png)

#### Data Heirarchy


``` structure

database_db
|__ one user has zero or many doodles
|__ zero or many doodles belong to one user

```

***

## Post-MVP

- Integrate a machine learning algorithm (image/pattern recognition) to guess what the user is drawing. 

***

## Reference Projects

  - quickdraw.withgoogle.com
  - pspdfkit.com/blog/2017/how-to-build-free-hand-drawing-using-react

***

## Code Showcase


## Code Issues & Resolutions

***