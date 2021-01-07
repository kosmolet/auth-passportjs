##  Authentication using Passport.js   

#### Setup  

Create `.env` file in the root directory of the project and add: 
PORT=5070  
NODE_ENV=development  
BASE_URL=http://localhost:3000  
COOKIE_KEY=somecookiekey  
MONGO_URI=yourMongodbUrl


Create developer accounts on Google, Twitter, Facebook, GitHub, Spotify, Amazon (for each authentication strategy)
Create application inside of each developer account, add Redirection/Callback URLs which correspond to the server routes  
Copy Client(app) ID and SECRET and add them to `.env` file in the root directory of the project

#### Start
Install dependencies for server `npm i` in root/server folder     
Install dependencies for client `cd client` `npm i`   
Start server and client concurrently: by navigating to server directory `cd ..` and running `npm run dev` command   


![login](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651095/projectsGitHUB/login%20passport/2021-01-03_5-43-30_wqqsuz.png)  
![auth](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651080/projectsGitHUB/login%20passport/sgn_vrn0o0.png)  
![redirect](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651080/projectsGitHUB/login%20passport/user_info_xqn5sz.png)  
