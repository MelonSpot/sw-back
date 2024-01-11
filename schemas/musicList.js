const mongoose = require("mongoose");

const MusicListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    url: {
        type: String,
        required: true,
        match: /^https?:\/\/[^\s/$.?#].[^\s]*$/,
    },
    coverImage: {
        type: String,
        default: "default_cover.jpg",
        required: false,
    },
});

// 가상의 musicId 값을 할당
MusicListSchema.virtual("musicId").get(function () {
    return this._id.toHexString();
});

// musicList 정보를 JSON으로 형변환 할 때 virtual 값이 출력되도록 설정
MusicListSchema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("MusicList", MusicListSchema);
