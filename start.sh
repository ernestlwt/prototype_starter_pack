#! /bin/bash

set -o allexport
source docker-compose.env
set +o allexport

docker-compose up 