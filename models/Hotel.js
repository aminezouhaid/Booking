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
            required: true
        },
        status: {
            type:Boolean,
            required: false
        },
        localisation: {
            city: {
                type: String,
                required: [false, 'Hotel must have a city']
            }
            // country: {
            //     type: String,
            //     required: [true, 'Hotel must have a coutry']
            // }
        }
    },
    
    { timestamps: true },
);
module.exports = model("Hotel", HotelSchema);