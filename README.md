# Pizza Ordering System

This is the adminstration system for pizza creator, and it a is subproject of [pizza-ordering-system](https://github.com/shn2016/pizza-ordering-system).

## Demos

Click these websites to go to the live demo of pizza creator project. They are all deployed on `github pages` and 'heroku'.

* [Pizza Creator](https://shn2016.github.io/react-pizza-creator/)
* [Pizza Admin System](https://shn2016.github.io/pizza-creator-admin/)
* [Pizza Backend API](https://pizza-admin-api.herokuapp.com/explorer/): `Cold Load as I used free plan, might take a few seconds`


## Introduction

This is the third part of [`Pizza Creator`](https://github.com/shn2016/pizza-ordering-system), it includes
* `Landing page` for demonstration.
* `Pizza creator` implemented by 3 ways:
  * Imperative Programming 
  * Declarative Programming(React like)
  * [React](https://github.com/shn2016/pizza-ordering-system/pizza-creator/React/)
* `Pizza admin system`: this project
* [`rest API`](https://github.com/shn2016/kai-pizza-admin-api): to support the backend API

## Technology

* HTML, CSS, JavaScript ES6
* Webpack, Babel
* React, React JSX , React Router
* Loopback 4 , NodeJS , TypeScript

## How to Run

* Git Clone
* Installation

```
npm install
npm start
```



## User Story

1. As an admin, I would like to add new topping (name, price, and image);
2. As an user, I would like to see all of available toppings and able to see the price on selected
3. As an admin, I would like to add new pizza Size (name, price and inch);
4. As an user, I would like to see all of available sizes and able to see the price on selected 

## Thinking

1. As the nature of react router(subpage is not real page), so it might has issues when using github issues. For example, refresh might not get the page.
  * For this, I altered the path in Link, to make it match github pages;
2. The SPA will call the api it change the page, when is costy. I assume it should be a cacheManager to manage it.

## About Me

```javascript
const kai = {
  name: "Kai GAO",
  email: "kaigaoinau@gmail.com",
  profession: "Junior Web Developer",
  location: "Melbourne, VIC, Australia",
}
```



