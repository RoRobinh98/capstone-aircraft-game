# Air Crash Investigations: A Game of Ethics (Backend)

API Deployed here: https://ge-backend.herokuapp.com/  

## Requirements

- MongoDb: Can be installed locally( [instructions here](https://docs.mongodb.com/manual/installation/) ) or through MongoDB Atlas (See [Setting Up Mongo DB Atlas](#1.-Setting-Up-Mongo-DB-Atlas))


## Project setup

### Local Development
1. Ensure MongoDB has been setup 
2. Run
```
npm install
```
3.  Set the parameter in `.env`:
- `MONGODB_URL`: URL for MongoDB service.

### Run webserver
```
npm run start
```

The process run on port 3000

## Project Credentials

### Email Account (Required To maintain other accounts)

```
email address: comp90082gameofethic@gmail.com
password: comp90082
```

### MongoDB account

```
email address: comp90082gameofethic@gmail.com
password: comp90082
```

### Heroku

```
email address: comp90082gameofethic@gmail.com
password: comp90082!
api password: 1ff6fe23-c7d1-4b5e-9c4f-f2d440c91d63
```

## Extending Software

### Insert Question

#### Question format

```
questionID: ,
background: "",
question: "",
options: [, ,],
roleInfo: ["",  // 0: executive
					 "",  // 1: developer
           "",  // 2: pilot
           "",  // 3: engineer 
           ""], // 4: FAA
duration: ,
weights: [, , , , ], // sum to 100
optionsFinalWeights: [, , ], // amount should be consistent with the amount of options
readyCount: 0,
readyPlayer: [],
votedCount: 0,
votedPlayer: [],
```

#### Option format

```
optionID:1,
questionID: 1,//current question ID
description: "",
consequences: {
	contracts:0, //F1
  compContracts:0, // F2
  shares:0,// F3

  publicRep:0, // R1
  regulatorRep:0, // R2
  internalRep:0, // R3
  voardRep:0,// R4, CEO only
  enviroRep:0, // R5

  expectedProg:0, // P1
  actualProg:0, // P2
  expectedCost:0, // P3
  actualCost:0 // P4
},
outcomeText: ,
next: 5 // id of next question
```

## Deployment

### 1. Setting Up Mongo DB Atlas
<!-- Attribution:
https://raw.githubusercontent.com/sahat/hackathon-starter/master/README.md
 -->

<img src="https://www.mongodb.com/assets/images/global/MongoDB_Logo_Dark.svg" width="200">

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click the green **Get started free** button
3. Fill in your information then hit **Get started free**
4. You will be redirected to Create New Cluster page.
5. Select a **Cloud Provider and Region** (such as AWS and a free tier region)
6. Select cluster Tier to **Free Shared Clusters**
7. Give Cluster a name (default: Cluster0)
8. Click on green **:zap:Create Cluster button**
9. Now, to access your database you need to create a DB user. To create a new MongoDB user, from the **Clusters view**, select the **Security tab**
10. Under the **MongoDB Users** tab, click on **+Add New User**
11. Fill in a username and password and give it either **Atlas Admin** User Privilege
12. Next, you will need to create an IP address whitelist and obtain the connection URI.  In the Clusters view, under the cluster details (i.e. SANDBOX - Cluster0), click on the **CONNECT** button.
13. Under section **(1) Check the IP Whitelist**, click on **ALLOW ACCESS FROM ANYWHERE**. The form will add a field with `0.0.0.0/0`.  Click **SAVE** to save the `0.0.0.0/0` whitelist.
14. Under section **(2) Choose a connection method**, click on **Connect Your Application**
15. In the new screen, select **Node.js** as Driver and version **2.2.12 or later**. _*WARNING*_: Do not pick 3.0 or later since connect-mongo can't handle mongodb+srv:// connection strings.
16. Finally, copy the URI connection string and replace the URI in MONGODB_URI of `.env` with this URI string.  Make sure to replace the <PASSWORD> with the db User password that you created under the Security tab.
17. Note that after some of the steps in the Atlas UI, you may see a banner stating `We are deploying your changes`.  You will need to wait for the deployment to finish before using the DB in your application.


**Note:** As an alternative to MongoDB Atlas, there is also [Compose](https://www.compose.io/).

### 2A. Deployment to Heroku
<!-- Attribution:
https://raw.githubusercontent.com/sahat/hackathon-starter/master/README.md
 -->

<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="200">

1. Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
2. In a terminal, run `heroku login` and enter your Heroku credentials
3. From *your app* directory run `heroku create -a [your app name]`
4. Use the command `heroku config:set KEY=val` to set the different environment variables (KEY=val) for your application (i.e.  `heroku config:set BASE_URL=[heroku App Name].herokuapp.com` or `heroku config:set MONGODB_URI=mongodb://dbuser:<password>@cluster0-shard-00-00-sdf32.mongodb.net:27017,cluster0-shard-00-01-sdf32.mongodb.net:27017/<dbname>?ssl=true&retryWrites=true&w=majority` (see Hosted MongoDB Atlas below), etc.)  Make sure to set the environment variables for SENDGRID_USER, SENDGRID_PASSWORD, and any other API that you are using as well.
5. Initial your git with `git init`
6. Use `git add .` and `git commit -m 'first commit'` to do the first commit 
7. Lastly, do `git push heroku master`.

Please note that you may also use the [Herko Dashboard](https://dashboard.heroku.com) to set or modify the configurations for your application.

### 2B. Deployment with Docker

1. To build docker image, run
   ```
   docker build -t a-game-of-ethics-backend .
   ```
3. To run the image, update the `.env` file (see Local development, Above) and then run
   ```
   docker run --network="host" --env-file .env a-game-of-ethics-backend:latest
   ```
   or
   ```
   docker run --network="host" -e MONGODB_URL=<<<URL>>> -e PORT=3000 a-game-of-ethics-backend:latest
   ```

## Project Documentation
Refer to the  `\docs` directory in the **Frontend repository**.