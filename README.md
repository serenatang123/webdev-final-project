# webdev-final-project

## Hi, Welcome to SmartKitchen

Here is the first version of the project description. Website Link: https://webdev-group-project.herokuapp.com/

## Team Introduction

Development Process: Agile Development

Committing way: feature branch workflow by committing branches and submit pull requests to have code reviewed and committed to the master branch

- Yiwen Sun: sun.yiw@northeastern.edu
- Yu Tang: tang.y@northeastern.edu
- Jiayao Li: li.jiayao@northeastern.edu
## Problem Solved

- Problem description
 Provides a platform for meal lovers to find their favorite recipes, save recipes on their own page. Admin can publish new recipes, edit and delete their post and explore things by different categories.

- Target Users

  - Artist
    - goal 1: create, login and edit profile page
    - goal 2: publish, edit, delete recipes, search posted history
  - customer
    - goal 1: create and login personal account
    - goal 2: search and add favourite recipes to his/her page, follow other users

## Stategy

#### Font-end

- Tech: React, CSS, JavaScript
  - Login: Google Sign-In API
  - Navbar: React-Bootstrap API
- Implementation
  - Home Page
    - About: a page that explains our mission and design of the site
    - Sign in with Google 
  - Search page
    - search by input text: a page for exploring recipes by different categories (type in auto-fill: ad-...)
    - search by categories: select certain meal type
  - Detail page
    - listed recipes: title, directions, category
  - Profile page
    - personal information, liked recipes
    - Publish: authenticated user may enter recipe description, category and item image url when adding a new post 
    - History: posted recipes

#### Back-end

- Tech: Node.js, Express, MongoDB
  - Backend business logic: Node.js
  - Server: Express
  - Database: MongoDB
- Implementation
  - Model
    - Post {title, directions, category, img url..}
    - Post can be edit, delete, add
  - User
    - Account info
    - User can sign in and out

#### Test Strategy Design

- Plan for testing content: document specific testing rules based on app features, covering technical reviews, database review, development testing, qualification testing, and acceptance testing
- Plan for testing process: test frontend and backend seperately initially and test the intergrated work

## About API

[Apple Services Performance Partners](https://www.themealdb.com/api.php)

All Patreon supporters have access to the beta version of the API which allows mutiple ingredient filters.
You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items. You can use the test API key "1" during development of your app or for educational use(see test links below)
However you must apply for a key a production API key via email if releasing publicly on an appstore.
The test key may be revoked at any time if abused.

- Search meal by name

  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

- Lookup full meal details by id
  https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

- List all Categories, Area, Ingredients

  https://www.themealdb.com/api/json/v1/1/list.php?c=list
  https://www.themealdb.com/api/json/v1/1/list.php?a=list
  https://www.themealdb.com/api/json/v1/1/list.php?i=list

## Other Info

**Copyright 2021 © Softaware**
