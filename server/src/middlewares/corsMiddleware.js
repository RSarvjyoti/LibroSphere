const cors = require("cors");

const corsOptions = {
    origin : "http://localhost:3000",
    methods : `GET, PUT, PATCH, POST, DELETE`,
    credentials : true,
}

const corsMiddleware = cors(corsOptions);
module.exports = corsMiddleware;