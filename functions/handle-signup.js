exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: ['member'],
      my_user_info: '멤버',
    },
    user_metadata: {
      ...user.user_metadata,
      permission: 'bronze',
    },
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
