##  Authentication using Passport.js   

#### Setup  

Create `.env` file in the root directory of the project and add: 
`PORT=5070`    
`NODE_ENV=development`   
`BASE_URL=http://localhost:3000`    
`COOKIE_KEY=somecookiekey`  
`MONGO_URI=yourMongodbUrl`  

Add applications in your developer accounts on Google, Twitter, Facebook, GitHub, Spotify, Amazon.  
Create application inside of each developer account, add Redirection/Callback URLs which correspond to the server routes  
Copy Client(app) ID and SECRET and add them to `.env` file in the root directory of the project

#### Authentication with [Twitter](http://www.passportjs.org/packages/passport-twitter/)  
Create [new application](https://developer.twitter.com/en/portal/apps/new) in the twitter developer account  
Navigate to **App Details**->**Authentication settings**->**Edit**  
Make active  **Enable 3-legged OAuth** option and add **Callback URLs** it should correspond to the routes where the users will be redirected after they logged in, for example: `http://localhost:5070/auth/twitter/redirect`  
Ensure that  **Terms of service URL**  and  **Privacy policy URL**  fields have values, if not - [generate](https://app.privacypolicies.com/wizard/privacy-policy) URLs and add them.   
Enable **Request email address from users**options and Save settings.  
Also `includeEmail: true` should be included in the `passport.use( new TwitterStrategy( {} )` in the `passport.js` config file (done) in order to receive user’s email in the response-profile  
Once [app](https://developer.twitter.com/en/portal/apps/) is created navigate to the **Keys and tokens** on app details and click `View Keys`. Copy `API key` and `API key secret` and add them to the `.env` file in root directory of the project:   
`TWITTER_CONSUMER_KEY=API key`   
`TWITTER_CONSUMER_SECRET=API key secret`    

#### Authentication with [Facebook](http://www.passportjs.org/packages/passport-facebook/)      
Create [new application](https://developers.facebook.com/apps/) in the facebook developer account   
Once app is created navigate to the app dashboard, and find **Facebook Login** product.  
Click **Set Up**, and then on the subsequent screen, click **Web**. Enter your base URL in the **Site URL** and complete adding the product.     
In the left-hand side menu bar select **Settings->Basic** and copy `App ID` and `App Secret` and add them to the `.env` file:    
`FACEBOOK_CLIENT_ID=App ID`  
`FACEBOOK_CLIENT_SECRET=App Secret`  

#### Authentication with [GitHub](http://www.passportjs.org/packages/passport-github/)    
Navigate to [github](https://github.com/settings/developers) in the **Settings / Developer settings** click `New OAuth App`    
 Register a new OAuth application: enter your base URL in the *Homepage URL* field and add *Authorization callback URL* , it should correspond to the route where the users will be redirected after they logged in, for example: `http://localhost:5070/auth/github/redirect`  
Once the app is created click `Generate client secret` in App Details and copy `Client ID` and `Client secret` and add them to the `.env` file:   
`GITHUB_CLIENT_ID=Client ID`  
`GITHUB_CLIENT_SECRET=Client secret`  

#### Authentication with [Amazon](http://www.passportjs.org/packages/passport-amazon/)      
Create [new application](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html) in the Amazon developer account   
Once app is created navigate to **Security Profile**->**Web Settings** and add **Allowed Origins**(base URL) and **Allowed Return URLs**: `http://localhost:5070/auth/amazon/redirect`  
Copy `Client ID` and `Client Secret` and add to the `.env` file:    
`AMAZON_CLIENT_ID=Client ID`  
`AMAZON_CLIENT_SECRET=Client Secret` 

#### Authentication with [Spotify](http://www.passportjs.org/packages/passport-spotify/)      
Create [new application](https://developer.spotify.com/dashboard/applications) in the Spotify developer account   
Once app is created navigate to **App details**->**Edit Settings** and add **Website**(base URL) and **Redirect URIs**: `http://localhost:5070/auth/spotify/redirect`  
Copy `Client ID` and `Client Secret` and add to the `.env` file:    
`SPOTIFY_CLIENT_ID=Client ID`  
`SPOTIFY_CLIENT_SECRET=Client Secret`


#### Start
Install dependencies for server `npm i` in root/server folder     
Install dependencies for client `cd client` `npm i`   
Start server and client concurrently: by navigating to server directory `cd ..` and running `npm run dev` command   


![login](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651095/projectsGitHUB/login%20passport/2021-01-03_5-43-30_wqqsuz.png)  
![auth](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651080/projectsGitHUB/login%20passport/sgn_vrn0o0.png)  
![redirect](https://res.cloudinary.com/dnkftif1n/image/upload/v1609651080/projectsGitHUB/login%20passport/user_info_xqn5sz.png)  
