const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Post = new Schema({
    title: {
        type: String,
        required: true
    },
    url_image: {
        type: String,
        required: true
    }
});

mongoose.model('post', Post);
