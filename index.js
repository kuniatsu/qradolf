(()=>{

})();

/**
 * Change color to colorless and transparent
 * @param {HTMLElement} canvasElement 
 * @param {Number} r 0-255
 * @param {Number} g 0-255
 * @param {Number} b 0-255
 */
function changeColerLess(canvas, r, g, b) {
    console.log("changeColerLess");
    var context = canvas.getContext("2d");
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < (imageData.width*imageData.height); i++) {
        if((imageData.data[i*4] == r) &&
           (imageData.data[i*4+1] == g) &&
           (imageData.data[i*4+2] == b)) {
            imageData.data[i*4+3] = 0;
        }
    }
    context.putImageData(imageData, 0, 0);
    return;
}


function draw() {
    console.log("draw()");
    var canvas = document.getElementById('c1');
    if ( ! canvas || ! canvas.getContext ) {
         return false; 
    }

    var ctx = canvas.getContext('2d');
    /* Imageオブジェクトを生成 */
    var img = new Image();
    img.src = "qr.png";
    console.dir(img);

    /* 画像を描画 */
    ctx.drawImage(img, 0, 0);

    console.log("drawEnd");
}