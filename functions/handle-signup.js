exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: ['registered'],
      my_user_info: '등록 사용자',
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
