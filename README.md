## Example of implementation Google and Github Authentication with OAuth 2.0 and MongoDB to NodeJS.

# Features:
 - It was **created** with **[Node.js](https://nodejs.org/en/)** and **[Express.js](https://www.google.com/search?q=express%20js&oq=express%20js&aqs=chrome..69i57j69i60j69i65j69i60j69i65l2.3304j0j4&sourceid=chrome&ie=UTF-8)**
 - **[MongoDB](https://www.mongodb.com/)** was used as **database**. And **[Mongoose.js](https://mongoosejs.com/)** for Object Data Modelling
 - Developed with **[Typescript](https://www.typescriptlang.org/)**
 - **[OAuth 2.0](https://www.google.com/search?q=oauth&oq=oauth&aqs=chrome..69i57j69i59l3j69i65j69i60l2.2375j0j4&sourceid=chrome&ie=UTF-8)** was used for the **authorization** protocol. (with Google and Github)
 -  **[Passport.js](https://www.passportjs.org/)** library was used, which provides convenience in the **authentication** process
 - **[Helmet.js](https://helmetjs.github.io/)** for security of **HTTP headers**.
 - **Cookie-Session**, **Nodemon**, **Dotenv** and more...

# Installation:

 -   **Create** file named `.env` in main directory (not src).
 

    PORT = YOUR_PORT
    GOOGLE_CLIENT_ID = YOUR_GOOGLE_CLIENT_ID 
    GOOGLE_CLIENT_SECRET = YOUR_GOOGLE_CLIENT_SECRET
    GITHUB_CLIENT_ID = YOUR_GITHUB_CLIENT_ID
    GITHUB_CLIENT_SECRET = YOUR_CLIENT_SECRET
    COOKIE_KEY_1 = YOUR_SECRET_KEY_1_FOR_COOKIE
    COOKIE_KEY_2 =  YOUR_SECRET_KEY_2_FOR_COOKIE
    MONGODB_URL = YOUR_MONGODB_URL

 - On main directory **run** this **command** `npm run dev` or `npm run start`

# API Routes:

 

## **/auth** - localhost:8000/auth
> **GET**
> 
 - **/auth/github** --- http://localhost:8000/auth/github (Sign-in with Github)
  - **/auth/google** --- http://localhost:8000/auth/google (Sign-in with Google)
   - **/auth/logout** --- http://localhost:8000/auth/logout (Log out)
## **/user** - localhost:8000/user
> **GET**

 - **/user/all** --- http://localhost:8000/user/all (Get all user records)
  - **/user/:userID** --- http://localhost:8000/user/1 (Get an user with user id)
   - **/user/username/:username** --- http://localhost:8000/user/username/eeguney (Get an user with username)
   - **/user/providerID/:providerID** --- http://localhost:8000/user/providerID/58622182 (Get an user with provider id. e.g: Your Github user id)
  > **POST**
   - **/user** --- http://localhost:8000/user (Create new user manually)
