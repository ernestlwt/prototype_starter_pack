# Prototype Starter Pack
Simple webapp starter pack using React + Flask + Postgres + Docker-compose

# Framework and Libraries used
*not exhausive, just listing the ones worth bringing attention to*
```
docker
docker-compose
```

Frontend
```
node
node-sass
react
react-bootstrap
react-router
react-icons
axios
```

Backend
```
python 3.6
flask
flask-sqlalchemy
flask-migrate
```

Database
```
postgres 12
pgadmin 4
```

# Running in Deployment

1. Build docker containers using `docker-compose build`
1. Edit variables accordingly in `docker-compose.env`
1. Start docker containers using `bash start.sh`
1. Stop docker containers using `docker-compose down`

# Running in Development

Please refer to the readme in `frontend/` and `backend/` respectively. There are more information and also provides a description to the folder structure.

# Notes

### Ports Used
During deployment, ports that are used on host are `3000, 5000, 5555` for frontend and backend respectively. During development, ports `3000, 5000, 5432, 5555` are used for frontend, backend, database, database viewer repectively. Difference is because a docker network is used to minimized the use of ports that are not needed to be open on host.

### Setting Environment Variables
All env variables that should/might be changed are moved to `docker-compose.env`. When running `start.sh`, it will then load the env variables in `docker-compose.env`. Compared to using the `env_file` docker-compose option, this will allow us to use env variables in other fields such as volume path.

# Questions

Just create an issue and I will answer there. Most probably it will help others too. If it is because you have not read the readme, then you will get a :angry: emoji

# Improvements
Fork and make a PR