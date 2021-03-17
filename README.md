<h3 align="center">A node module for interacting with <a href="https://botsfordiscord.com" target="_blank">Bots For Discord's</a> <a href="https://docs.botsfordiscord.com" target="_blank">api</a></h3>

<br>

# Any problem?

Feel free to create an [issue](https://github.com/notkyoyo/bfdapi.js/issues) on this repository or for faster response, join this [discord server.](https://discord.gg/yyW389c)

# Some things to Note

- This module doesn't support auto posting features.
- This module doesn't support handling webhooks.

# Examples:

### Posting Server Count

```javascript
const BFDAPI = require("bfdapi.js");
const api = new BFDAPI("Client ID", "API Token");

api.postServerCount(25).then((res) => console.log(res));
// if successful: { message: 'Server count successfully updated.', code: 200 }

// if failed, it will throw an error
```

### Get Bot

```javascript
const BFDAPI = require("bfdapi.js");
const api = new BFDAPI("Client ID");

api.getBot("Client ID").then((res) => console.log(res));
// if successful: {<Object>}

// if failed, it will throw an error
```

# Contributions

### [Fork](https://github.com/notkyoyo/bfdapi.js/fork) the repo, add some codes, then [pull](https://github.com/notkyoyo/bfdapi.js/fork) the new codes, and if it's good. I'll merge it will the main branch.
