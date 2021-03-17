const BFDAPI = require("../index");
const api = new BFDAPI("Client ID", "Token");

api.postServerCount(20).then((res) => console.log(res));
