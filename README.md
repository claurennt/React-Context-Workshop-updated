# It’s all about Context!
![Unicorns Inc.](https://raw.githubusercontent.com/MyElectricSheep/Context-Workshop-WBS/main/src/pics/unicorns_inc.jpg)
#### This is an exercise to learn about the usage of context in React. The correction to the exercise is in the [correction branch of this repo](https://github.com/MyElectricSheep/Context-Workshop-WBS/tree/correction)

##### Context:
You’ve been hired as a freelancer by the new fintech **Unicorns Inc** to create new features for their app! After having successfully raised 50 million USD, they think it’s now time to actually develop a real product, and not just a startup deck.

They’re literally starting from scratch. They hand you the keys to `this repo`, and you realize it’s just a bunch of boilerplate with a router... 😅

#### Your Mission  

Build the following functionalities:  

#### Level 1:
- Store information about the company in a state in App.js (name of the company, number of customers…). Make that information available anywhere down the component tree through [Context](https://reactjs.org/docs/context.html). 
-- In `Welcome.js`, you want to display the following sentence: “500.000 people served daily” where the dummy number is dynamically injected through the context. The name of the company should also be dynamic, in case they need to pivot quickly.
-- In `Admin.js`, Admins of the company should have an input field to update the company context and change the number of customers, so that they can show it to investors, and raise more money.

#### Level 2:
The CEO wants the Admin route to be protected so no one except him will be able to access the company’s secret data and its bank account hidden offshore. You can do that in 3 steps:
1. Manage the authentication workflow of the app. Create an `AuthContext.js` file that will hold the user token + a function to update it, and wrap your routes with it.
2. Create a `Signin.js` component for the route `/signin`, where a user can enter its login credentials (email + password). Hit the following endpoint with a POST request containing these credentials (username + password) to get a valid JWT
```js
 const credentials = {
   endpoint: "https://wbs-simple-auth.herokuapp.com/auth/login",
   // After the failure of his much awaited pokemon fighting game,
   // the CEO of Unicorns Inc decided to go where the money is.
   // Still parts of the old application have been refurbished
   // and you don’t have to work on the back-end :)
   username: "ben",
   password: "chicken",
   token: res.headers["x-authorization-token"]
   // JWT will be in the response headers
}
```
When you get a token back, store it locally (in a [cookie](https://www.npmjs.com/package/js-cookie), or with [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and update the `AuthContext` with it.

3. Create a `ProtectedRoute.js` component that will protect the `/admin path` (or any other). The idea here is to check for the existence of a token in the context, and if it’s here, allow the user to go to the required route, or else, redirect the user to the `/signin` page. 
- You can read up on how to create a protected route with the render props technique [here](https://dev.to/mychal/protected-routes-with-react-function-components-dh).
- You should systematically check for the existence of a token in App.js when the app mounts, so that even if the page refreshes, a logged in user can still access the protected routes without having to login again.
- You should have a Logout component somewhere in the app that will flush the cookie, reset the AuthContext, and redirect to the home page.
- **Optional:** of course, merely having a token stored on the client side does not mean it’s valid and does not prevent you from validating the token server side. You could send a request to a protected endpoint (like `/auth/me` on this API) before processing the request at the route level. 

#### Level 3:
The board of directors of Unicorns Inc is satisfied with your progress. They have decided to continue working with you. They will pay less, but you’ll get shares of the company, and you hear they have good investments going on in South-East Asia, where their next product (a rainbow coloured crypto credit card) is poised to be a hit. For the next assignment, they would like you to create an [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization) system so that the app language can be switched seamlessly with the click of a button.

- You could use a ready-made solution such as [i18next](https://www.i18next.com/). But you know better (and you need a reason to bill those hours…). To achieve this task, you’re going to create a new `TranslationContext.js`.
- There’s no set way to do things here; one approach is to pass an object with all translations for a specific locale down the component tree, and have the components render something like this: `<div>{translation.home.title}</div>` instead of hardcoded text; based on the selected locale.
- So first you need a state to hold the selected locale (defaults to `‘en’`), then a button/dropdown somewhere to change the value
- Then you could store your translations into JSON files (en.json, de.json…) and import them in your app, but for a small scale app, having a JS object in your TranslationContext will do the trick. Make sure you pass the correct part of the object based on the user’s locale selection!
