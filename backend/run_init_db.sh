#!/bin/bash
export FLASK_ENV=development
export DATABASE_URI=postgres://admin:admin@localhost:5432/prototype_db

flask db init