const handleError = error => {
  if (error) {
    console.error(error)
    throw error
  }
}

module.exports = handleError
