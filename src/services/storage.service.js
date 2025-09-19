const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL
});

const uploadImage = async (file , fileName) => {

    try {
        const response = await imagekit.upload({
            file: file,
            fileName: fileName,
            folder: "menu"
        });
        return response.url;
    } catch (error) {
        console.error("Error uploading image:", error);
    }

}

module.exports = uploadImage;