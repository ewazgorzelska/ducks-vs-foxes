export function cutImageUp(url) {
    var image = new Image();
    image.onload = cutImageUp;
    image.setAttribute('crossorigin', 'anonymous');
    image.src = 'https://random-d.uk/api/38.jpg';

    var imagePieces = [];
    for(var x = 0; x < 2; ++x) {
        for(var y = 0; y < 2; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = 150;
            canvas.height = 150;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * 150, y * 150, 150, 150, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }
    return imagePieces;
}