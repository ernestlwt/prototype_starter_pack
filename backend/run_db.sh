#! /bin/bash
docker run -d --rm \
    --name prototype_db \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD=admin \
    -e POSTGRES_USER=admin \
    -e POSTGRES_DB=prototype_db \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /home/ernestlwt/data/pluggy_data/pgdata:/var/lib/postgresql/data/pgdata \
    postgres:12