# Air Crash Investigations: A Game of Ethics (Frontend)

Application Deployed Here: https://game-of-ethics-2022.herokuapp.com/


## Project setup

### Local Developmemt

1. Run
```
npm install
```
2. Set the parameters in `.env` :
- `PORT`: Port number for proudction server (only used for deployment)
- `VUE_APP_BACKEND_URL`: URL for backend service (e.g. https://[your app name].herokuapp.com/ ; fill the brackets with your app's name and don't forget the trail in the end)

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```
#### Run unit test suite
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


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
api key: 1ff6fe23-c7d1-4b5e-9c4f-f2d440c91d63
```

## Deployment

### Deployment with Heroku
<!-- Attribution:
https://raw.githubusercontent.com/sahat/hackathon-starter/master/README.md
 -->

<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="200">

1. Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
2. In a terminal, run `heroku login` and enter your Heroku credentials
3. From *your app* directory run `heroku create`
4. Use the command `heroku config:set KEY=val` to set the different environment variables (KEY=val) for your application (i.e.  `heroku config:set BASE_URL=[heroku App Name].herokuapp.com` or `heroku config:set VUE_APP_BACKEND_URL=http://backend-url.com` (see Hosted MongoDB Atlas below), etc.)  Make sure to set the environment variables for SENDGRID_USER, SENDGRID_PASSWORD, and any other API that you are using as well.
5. Lastly, do `git push heroku master`.

Please note that you may also use the [Heroku Dashboard](https://dashboard.heroku.com) to set or modify the configurations for your application.

### Deployment with Docker

1. To build docker image, run
   ```
   docker build -t a-game-of-ethics-frontend .
   ```
3. To run the image, update the `.env` file (see Local development, Above) and then run
   ```
   docker run --network="host" --env-file .env a-game-of-ethics-frontend:latest
   ```
   or
   ```
   docker run --network="host" -e VUE_APP_BACKEND_URL=http://backend-url.com -e PORT=8080 a-game-of-ethics-frontend:latest
   ```
