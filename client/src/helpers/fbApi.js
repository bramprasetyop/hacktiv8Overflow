function getFbAPI(cb) {
  FB.api('/me', {
    fields: ['name', 'email']
  }, function (response) {
    cb(response)
  })
}

export {
  getFbAPI
}