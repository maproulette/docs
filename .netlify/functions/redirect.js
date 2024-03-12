exports.handler = async (event, context) => {
  const { path } = event

  function isValidURL(url) {
    const regex = /^\/\w+\/(?:documentation|screencasts)\/?$/
    return regex.test(url) || url === '/' || url === '/releases/'
  }

  function redirectToValidURL() {
    if (!isValidURL(path)) {
      const newURL = `/en-us${path}`
      return { statusCode: 301, headers: { Location: newURL } }
    }
    return { statusCode: 200, body: JSON.stringify({ message: 'Valid URL.' }) }
  }

  const response = redirectToValidURL()

  return response
}
