# Running backend during development

1. Make sure you are in the `backend` folder
1. Start database by running `bash run_db.sh`. Make sure to change the folder directory to something applicable for your pc.
1. **[OPTIONAL]** Start database web gui browser `bash run_db_viewer.sh`. This step is not necessary but useful during debugging. PGAdmin might be a little hard to use at first, but it has a lot of features.
1. **[ONLY ONCE]** To initialize database migration, run `bash run_init_db.sh`. This will create a migration folder, once the migration folder exists you do not have to run this again. This migration folder is kinda like git for tracking database schema changes. Read more [here](https://flask-migrate.readthedocs.io/en/latest/).
1. To start up server, run `bash run_dev.sh`

# Folder structure
A description of the folder structure used. Feel free to change according to your own preference
```
backend/
    migrations/ --> created using run_init_db.sh or flask db init
    app/
        models/ --> sqlalchemy database objects
        routes/ --> API endpoints
    config.py --> assign or read in environment variables
    extensions.py --> stores flask extensions
    __init__.py --> initializes app
    run.py --> entrypoint to start app. flask run looks for this
    run.sh --> entrypoint for docker container
```

# Useful plugins

Below are some useful plugins that you might be useful for you. There are many more available! Go Google!
- [Flask-apscheduler](https://github.com/viniciuschiele/flask-apscheduler): For creating cron/interval jobs. It is basically a flask wrapper for [APScheduler](https://apscheduler.readthedocs.io/en/stable/)
- [Flask-sse](https://flask-sse.readthedocs.io/en/latest/quickstart.html): For creating server to client broadcast messages
- [Flask-jwt-extended](https://flask-jwt-extended.readthedocs.io/en/stable/): For creating authentication using JWT tokens


# Notes

#### Database migration
The database migration function has been abstracted. For more details on how to use this, refer to the official [docs](https://flask-migrate.readthedocs.io/en/latest/). You can do other stuff like rollbacks and also adding message to each schema change for better documentation
