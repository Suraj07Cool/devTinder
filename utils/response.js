const successResponseData = (res, data, message = 'success', meta) => {
  res.status(200).json({
    status: 'success',
    message,
    data,
    meta: meta || null,
  });
}


const errorResponseWithData = (res, error, message = 'error') => {
  res.status(400).json({
    status: 'error',
    message,
    error,
  });
}
module.exports = {successResponseData,errorResponseWithData} 