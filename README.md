#  Music library

## Installation

Clone the repo and install npm dependencies:

```
npm install
```

## Running the App

Start the DB with some sample data:
```
./run-db.sh 
```

After the DB started:

```
npm start
```

Open the page [http://localhost:3003/home](http://localhost:3003/home) to access the app.


## Alternative: start both application and mongoDB with: docker docker-compose up -d 

(work in progress) on this branch https://github.com/stelianabudai/musiclibrary/pull/16 


## Running tests

```
npm run-script test
```

## Running lint
```
npm run-script lint
```
