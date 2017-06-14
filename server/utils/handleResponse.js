const handleResponse = (service, res, token) => {
  if (!res) {
    console.error('response object required for handleResponse')
    return
  }
  service(token).then(function (results) {
    res.json(results)
  })
  .catch(function (err) {
    res.statusCode = 503
    res.json(err)
  })
}

module.exports = handleResponse
