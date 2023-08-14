const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "c251a132-c687-41d7-9c8c-4670fb0d1890" } }
        );
        return res.status(r.status).json(r.data);
    }
    catch (e) {
        // console.log(e)
        return res.status(e.response.status).json(e.response.data);
    }
    //c251a132-c687-41d7-9c8c-4670fb0d1890

});

app.listen(3001);