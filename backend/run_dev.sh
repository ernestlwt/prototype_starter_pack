#! /bin/bash
export FLASK_ENV=development
export DATABASE_URI=postgres://admin:admin@localhost:5432/prototype_db

flask db migrate
flask db upgrade
gunicorn run:app --worker-class gevent --bind 127.0.0.1:5000