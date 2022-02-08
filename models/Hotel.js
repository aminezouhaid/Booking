const { Schema, model } = require('mongoose');
const HotelSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
        image_cover: {
            type: String,
            required: false
        },
        // status: {
        //     type:Boolean,
        //     required: false
        // }
    },
    { timestamps: true }
);
module.exports = model("Hotel", HotelSchema);