
    docker build -t mongo-sample-data . 
    docker run  -e MONGO_INITDB_DATABASE=music     -p 27017:27017    -it mongo-sample-data                    \
