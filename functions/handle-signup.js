exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: ['member'],
      role_default: 'member',
    },
    user_metadata: {
      ...user.user_metadata,
      user_permission: 'bronze',
    },
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
