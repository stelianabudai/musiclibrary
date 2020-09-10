
    docker build -t mongo-sample-data . 
    docker run  -e MONGO_INITDB_DATABASE=music-db     -p 27017:27017    -it mongo-sample-data                    \
