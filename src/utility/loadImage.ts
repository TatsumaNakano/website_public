

export function LoadImage(url: string, setImage: Function) {
    var img = new Image();
    img.onload = function () {
        setImage(img.src);
    }
    img.src = url;
}
