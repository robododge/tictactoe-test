This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Full generated documentsion from React bootstrapping is here [Full React 16.x Generated Doc](docs/react16README.md)


## Table of Contents

- [Full React 16.x Generated Doc](docs/react16README.md)
- [Docker Build and Deploy](#docker-build-deploy)

## Docker Build and Deploy

1. First run the npm script for the full build of the project.
   - `npm run build` documented [Here](docs/react16README.md#npm-run-build)
2. Create a docker image
   - from the root of the project run `docker build -t tictac:1.0 .`
   - you should now have a docker image with the label tictac:1.0
   - check your docker images with `docker images` to make sure the new image is listed
3. Deploy the docker image
   - This docker image uses Nginx to expose the test tictactoe app
   - run `docker run --rm -p 8888:80 --name tictac-www -d tictac:1.0`
   - with the -p flag, this will run the docker image locally and expose the applicaiton on port 8888, Nginx is actually running internally inside the container on port 80
   - the --rm flag ensure the container is removed from the process list if it stopped, otherwise you would have to type a remove command to tell docker to remove the container completely before bringing in a new one to run.
   - list out the running docker containers with `docker ps`