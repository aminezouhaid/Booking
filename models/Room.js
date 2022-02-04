const { Schema, model } = require('mongoose');
const RoomSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        image_cover: {
            type: String,
            required: true
        },
        hotel_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        },

    },
    { timestamps: true }
);
module.exports = model("Room", RoomSchema);