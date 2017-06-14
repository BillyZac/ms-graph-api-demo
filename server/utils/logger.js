const logger = (req, res, next) => {
  console.log('==================');
  console.log('Received request:');
  console.log(req.originalUrl);
  next()
}

module.exports = logger
