const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilio = require('twilio');
module.exports = new twilio(accountSid, authToken);
