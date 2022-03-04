exports.handler = (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: '안녕! Netlify 😃' }),
  };
};
