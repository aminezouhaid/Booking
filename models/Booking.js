const { Schema, model } = require('mongoose');
const BookingSchema = new Schema(
    {
        date_from: {
            type: Date,
            required: true,
        },
        date_to: {
            type: Date,
            required: true
        },
        total_price: {
            type: String,
            required: false
        },
        payement_method: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        user_id: [
            { type: Schema.Types.ObjectId, ref: 'users' }
        ]
    }, {

},
    { timestamps: true },
);
module.exports = model("booking", BookingSchema);