exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: ['registered'],
      my_user_info: 'registered user here',
    },
    user_metadata: {
      ...user.user_metadata,
      custom_data_from_function: 'some extra super data',
    },
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
