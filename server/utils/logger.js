const logger = (req, res, next) => {
  console.log('==================');
  console.log('Received request:');
  console.log(req.originalUrl);
  console.log('==================');
  next()
}

module.exports = logger
