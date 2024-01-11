const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    musicIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MusicList",
        },
    ],
});

playListSchema.virtual("playListId").get(function () {
    return this._id.toHexString();
});

playListSchema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("PlayList", playListSchema);
