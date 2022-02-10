const Room = require("../models/Room")


const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find()
        res.status(200).json({ success: true, data: rooms })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
const getRoom = async (req, res) => {
    const roomId = req.params.roomId
    try {
        const room = await Room.find({ _id: roomId })
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}

const creatRoom = async (req, res) => {
    try {
        const { name } = req.body
        const { description } = req.body
        const { type } = req.body
        const { price } = req.body

        const { hotel_id } = req.body

        const newRoom = new Room({
            name: name,
            description: description,
            type: type,
            price: price,

            hotel_id: hotel_id
        })
        if (req.file) {
            newRoom.image_cover = req.file.path
        }

        const saveRoom = await newRoom.save()
        res.status(201).json({ success: true, data: saveRoom })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}


const updateRoom = async (req, res) => {
    const roomId = req.params.roomId
    const { name } = req.body
    const { description } = req.body
    const { type } = req.body
    const { hotel_id } = req.body
    try {
        const updatedRoomData = await Room.updateOne({ _id: roomId }, {
            $set: {
                name: name,
                description: description,
                type: type,
                hotel_id: hotel_id
            }
        })
        res.status(201).json({ success: true, data: updatedRoomData })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

const deletRoom = async (req, res) => {
    const roomId = req.params.roomId
    try {
        await Room.remove({ _id: roomId })
        res.status(200).json({ success: true, data: deletRoom })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

module.exports = {
    creatRoom,
    getRooms,
    getRoom,
    updateRoom,
    deletRoom

};

