function createResponse(status, message, success, payload = null) {
  const response = {
    message,
    success,
  };

  if (payload) {
    response.payload = payload;
  }

  return {
    status,
    json: response,
  };
}

module.exports = { createResponse };
