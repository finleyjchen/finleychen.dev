const fs = require('fs');
const axios = require('axios');
const probe = require('probe-image-size');
const { getPlaiceholder } = require("plaiceholder");

const albums = [
    {
        title: "Tokyo",
        date: "December 17 - December 21",
        albumId: "s99FAFi5jGzC99sY8"
    },
    {
        title: "Kyoto",
        date: "December 21 - December 23",
        albumId: "4a1zSTsqsvrQd6Ug7"
    },
    {
        title: "Osaka",
        date: "December 23 - December 27",
        albumId: "s99FAFi5jGzC99sY8"
    },

];

(async () => {
    var photos = albums
    for (const [key, album] of albums.entries()) {
        photos[key].photos = await getAlbum(album.albumId)
        for (const [index, photoList] of photos[key].photos.entries()) {
            var dimensions = await probe(photoList.url)
            photoList.width = dimensions.width
            photoList.height = dimensions.height
            getPlaiceholder(photoList.url).then(({ base64 }) =>
                photoList.blurData = base64
            );
        }
    }
    try {
        fs.writeFileSync('./public/photoData.json', JSON.stringify(photos));
    } catch (err) {
        console.log('Error writing header and footer data', err);
    }

    console.log('Header and footer data successfully generated');
})();

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
    const links = new Set()
    let result;

    while (result = regex.exec(content)) {

        // console.log(result[1])
        const imgUrl = result[1] + '=w2000'
        links.add({ url: imgUrl })

    }

    return Array.from(links)
}


async function getAlbum(id) {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`)
    const photos = extractPhotos(await response.data)
    return photos
}
