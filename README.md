# RecipeKeeper App is a trusted resource for home cooks with more than 1m recipes.

## Description
Find quick and easy recipe inspiration, perfect for any occasion, including healthy recipes, budget-friendly meals, vegetarian recipes, and more. If you have a great recipe that you would like to share, don't hesitate! Just click 'Add Recipe' and share it with other passionate cooks. You can also bookmark your favorite meal and store it in 'Bookmarks'. <br>
Are you having a lot of guests and don't know how many ingredients you need to buy? The app will calculate it for you!

## Demo
RecipeKeeper  is a responsive app that is possible to view using a browser on different devices, such as mobile or tablet. 
![DemoApp](https://github.com/wartelski/recipekeeper/blob/main/Demo/DemoApp.gif)

## Installation
```
git clone https://github.com/wartelski/recipekeeper.git

npm install

npm start
```

## Tech Stack
**Client**: JavaScript, SCSS, HTML

- As a web application bundler was used [Parcel.js](https://parceljs.org/)
- To solve decimal-to-fraction conversion problem was used [Fracty](https://www.npmjs.com/package/fracty) module
- Used Forkify API
- Used modern, up-to-date JavaScript (ES6+)
- Used localStorage to store the data
- Added day/night theme

> For security reasons API key was removed. Please, generate your own API key: https://forkify-api.herokuapp.com/v2

## API Reference

#### Get all recipes/Create recipe

GET: Returns a list of recipes for a specific search query <br>

POST: Creates a new recipe

```
  https://forkify-api.herokuapp.com/api/v2/recipes
```

| Parameter | Required     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | Yes | Search text |
| `key` | Yes (for POST) | The ForkifyAPI key |

#### Get recipe/Delete recipe
GET: Returns a single recipe<br>

DELETE: Deletes a single recipe associated with provided API key

```
  https://forkify-api.herokuapp.com/api/v2/recipes/:id
```

| Parameter | Required     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | Yes | The id of the recipe to be fetched or deleted (part of URL) |
| `key` | Yes (for DELETE) | The ForkifyAPI key |


## Flowchart
![Flowchart](https://github.com/wartelski/recipekeeper/blob/main/flowchart.png)

## More improvements
I'm still working on improvements to this app. In the future, the following will be added: <br>
- [ ] display number of pages between the pagination buttons <br>
- [ ] improve recipe ingredient input: separate in multiple fields and allow more than 6 ingredients <br>
- [ ] shopping list feature: button on recipe to add ingredients to a list <br>
- [ ] weekly meal planning feature: assign recipe to the next 7 days and show on a weekly calendar <br>
- [ ] get nutrition data on each ingredient from spoonacular API and calculate total calories of recipe <br>

## License
[MIT](https://github.com/wartelski/recipekeeper/blob/main/LICENSE)