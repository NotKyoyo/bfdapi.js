const EventEmitter = require("events");
const fetch = require("phin");

class BFDAPI extends EventEmitter {
  constructor(id, token) {
    super();

    this._id = id;
    this._auth = token;
  }

  async postServerCount(server_count, id = this._id, auth = this._auth) {
    if (!id) throw Error("Missing bot id.");
    if (!auth) throw Error("Missing authorization token.");

    return fetch({
      method: "POST",
      url: `https://botsfordiscord.com/api/bot/${id}`,
      data: {
        server_count,
      },
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    })
      .then((res) => {
        return {
          message: res.body.message,
          code: res.statusCode,
        };
      })
      .catch((err) => {
        throw err;
      });
  }

  async getBot(id = this._id) {
    if (!id) throw Error("Missing bot id.");
    return fetch({
      url: `https://botsfordiscord.com/api/bot/${id}`,
      parse: "json",
    })
      .then((res) => {
        return res.body;
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = BFDAPI;
