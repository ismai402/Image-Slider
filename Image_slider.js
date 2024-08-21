var photos = ["img_food.jpg", "Animation-of-bulb.gif", "pic_bulboff.gif"];
var ImgTag = document.querySelector("img");
var count = 0;
function next() {
    count++;
    ImgTag.src = photos[count];
    if (count >= photos.length) {
        count = 0;
        ImgTag.src = photos[count];
    }
    else {
        ImgTag.src = photos[count];
    }
}


function prev() {
    count--;
    ImgTag.src = photos[count];
    if (count < 0) {
        count = photos.length - 1;
        ImgTag.src = photos[count];
    }
    else {
        ImgTag.src = photos[count];
    }

}