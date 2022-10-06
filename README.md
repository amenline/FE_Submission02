# FE_Submission02
This app is deployed to [freddys-shop.netlify.app](https://freddys-shop.netlify.app)

## Structure
Below is a visual representation of the directory tree:
```bash
.
├── public
│   ├── assets
│   │   ├── fonts
│   │   │   └── inter.ttf
│   │   ├── images
│   │   │   ├── favicon.ico
│   │   │   └── logo.svg
│   │   ├── scripts
│   │   │   ├── auth.js
│   │   │   ├── commonScripts.js
│   │   │   ├── dashboard.js
│   │   │   ├── helpers.js
│   │   │   └── orders.js
│   │   └── styles
│   │       ├── baseStyles.css
│   │       ├── dashboard.css
│   │       ├── layout.css
│   │       ├── login.css
│   │       └── orders.css
│   ├── dashboard.html
│   ├── index.html
│   └── orders.html
└── README.md
```

### How it works
This app uses only Vanilla Javascript with HTML and CSS to implement the requirements from the specification given.
The **access** and **refresh** tokens are saved in the cookie upon successful login.\n
- On initial load, when a refresh token is not found, all pages redirect to login *`/`*, that is `public/index.html`
- Upon successfully login, the user is redirected to the dashboard that is `public/dashboard.html`. When a user tries to access the login page whiles logged in, the user is redirected to *`/dashboard`*.
- Each page on load checks if the user is still authenticated, if a refresh token exists, a new access token is retrieved else the user is redirected to the login page.

## Running the app
_It is to be noted that when viewing the html files directly on Google Chrome, it prevents saving cookies locally hence would prevent login._
However, it works fine when serving it with any local server. You can try the VS-Code extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

