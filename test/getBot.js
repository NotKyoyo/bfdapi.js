const BFDAPI = require("../index");
const api = new BFDAPI("Client ID");

api.getBot().then((res) => console.log(res));
