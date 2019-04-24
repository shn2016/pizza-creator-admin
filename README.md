# Pizza Ordering System

This is the adminstration system for pizza creator, and it a is subproject of [pizza-ordering-system](https://github.com/shn2016/pizza-ordering-system).

## Introduction
There are four parts:
* [`Landing page`](https://github.com/shn2016/pizza-ordering-system/tree/master/landing-page) for demonstration.
* `Pizza creator` implemented by 3 ways:
  * Imperative Programming: [github](https://github.com/shn2016/pizza-ordering-system/tree/master/pizza-creator/Imperative%20Programming)
  * Declarative Programming(React like): [github](https://github.com/shn2016/pizza-ordering-system/tree/master/pizza-creator/Declarative%20Programming)
  * React: [github](https://github.com/shn2016/react-pizza-creator) , [`demo`](https://shn2016.github.io/react-pizza-creator/)
* `Pizza admin system`(pizza-admin-system/): [github](https://github.com/shn2016/pizza-creator-admin/) ,   [`demo`](https://shn2016.github.io/pizza-creator-admin/)
* `Backend`: to provide API.  [github](https://github.com/shn2016/kai-pizza-admin-api) ,  [`demo`](https://pizza-admin-api.herokuapp.com/explorer/)

Click these websites to go to the live demo of pizza creator project. They are all deployed on `github pages` and 'heroku'.

***Notice***: as I used free plan, the link may take a short time to load as they are cold loading ( sleep )


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



