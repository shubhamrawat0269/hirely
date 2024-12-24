function createResponse(status, message = '', success, payload = null) {
  const response = {
    success,
  }

  if(message) response.message = message
  if (payload) response.payload = payload

  return {
    status,
    json: response,
  }
}

module.exports = { createResponse }
