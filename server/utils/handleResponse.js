const handleResponse = (service, res, token) => {
  service(token).then(function (results) {
    res.json(results)
  })
  .catch(function (err) {
    res.statusCode = 503
    res.json(err)
  })
}

module.exports = handleResponse
