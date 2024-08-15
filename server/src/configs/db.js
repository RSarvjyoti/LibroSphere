const {connect}  = require("mongoose");

const connectToMongo = async (url) => {
    await connect(url);
}

module.exports = connectToMongo;