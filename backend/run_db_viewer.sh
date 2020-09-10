#! /bin/bash
docker run --rm -d --net=host \
    --name prototype_db_viewer \
    -e PGADMIN_DEFAULT_EMAIL=admin \
    -e PGADMIN_DEFAULT_PASSWORD=admin \
    -e PGADMIN_LISTEN_PORT=5555 \
    dpage/pgadmin4:latest
