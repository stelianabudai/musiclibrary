export default (err, req, res, next) => {
    // formulate an error response here
    console.log('sdsdsdsdsd');
    if(err){
        return res.status(500).send('An error ocurred. Please try later')
    }
    next()
  }