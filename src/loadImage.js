export default function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = err => reject(err);
    image.src = src;
  });
}
