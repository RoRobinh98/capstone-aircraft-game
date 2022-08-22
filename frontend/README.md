# Air Crash Investigations: A Game of Ethics (Frontend)

Application Deployed Here: https://game-of-ethics.herokuapp.com/ 

## Team Members

<table>
    <tr>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/31333514?s=100&v=4" width="100px;"height="100px;"alt="" /><br /><sub><b>Yu Guo</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/22024788?s=100&v=4" width="100px;"height="100px;"alt="" /><br /><sub><b>Chenling Huang</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/28424009?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Angus Hudson</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/54093029?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Peiwen Jin</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/37367037?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Akhmetzhan Kussainov</b></sub></a><br /></td>  
    </tr>
    <tr>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/28001836?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Lu Lei</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/49152711?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Yuhen LI</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/37064634?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Eric Sciberras</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/34187831?s=100&v=4" width="100px;"alt="" /><br /><sub><b>Rainer Selby</b></sub></a><br /></td>
        <td align="center"><img src="https://avatars.githubusercontent.com/u/37160420?s=100&&v=4" width="100px;"alt="" /><br /><sub><b>Christina Xu</b></sub></a><br /></td>
    </tr>
</table>

## Project setup

### Local Developmemt

1. Run
```
npm install
```
2. Rename `.env.example` to `.env` and set the parameters:
- `PORT`: Port number for proudction server (only used for deployment)
- `VUE_APP_BACKEND_URL`: URL for backend service (Note: please include trailing /)

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
email address: aircrash.investigation2020@outlook.com
password: swen90013
```

### MongoDB account

```
email address: aircrash.investigation2020@outlook.com
password: swen90013
```

### Heroku

```
email address: aircrash.investigation2020@outlook.com
password: ceQVY863N5HAR5*
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
