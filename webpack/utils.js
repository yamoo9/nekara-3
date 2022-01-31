const path = require('path');
const setPathBasedOnRoot = (route) => path.resolve(process.cwd(), route);

module.exports = {
  setPathBasedOnRoot
};