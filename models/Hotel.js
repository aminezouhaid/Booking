
const { Schema, model } = require('mongoose');
const HotelSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false
        },

        image_cover: {
            type: String,
            required: true
        },

        stars: {
            type: Number,
            required: false
        stars: {
            type: Number,
            required: true
        },
        image_cover: {
            type: String,
            required: false
        },
        status: {
            type:Boolean,
            required: false
        },
        status: {
            type:Boolean,
            required: false
        },
        localisation: {
            city: {
                type: String,
                required: [false, 'Hotel must have a city']
            },
            country: {
                type: String,
                required: [false, 'Hotel must have a coutry']
            }
        }

        localisation: {
            city: {
                type: String,
                required: [true, 'Hotel must have a city']
            },
            country: {
                type: String,
                required: [true, 'Hotel must have a coutry']
            }
        }
    },

    { timestamps: true },
);
module.exports = model("Hotel", HotelSchema);