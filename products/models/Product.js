const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    created_at:{
        type: Date,
        default:Date.now
    }
});

module.exports = Product = mongoose.model("products", ProductSchema);