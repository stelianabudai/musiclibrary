FROM mongo
COPY /data/seed-data.js /docker-entrypoint-initdb.d/