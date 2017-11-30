/* eslint consistent-return: 0 */

const isCached = test => test.complete || test.width + test.height > 0;

export default function loadImage(src) {
  return new Promise((resolve, reject) => {
    // server side support
    if(typeof Image == 'undefined') return resolve({ src, isCached: false });
    
    const image = new Image();
    image.src = src;
    // Remind: Check if cached
    if (isCached(image)) return resolve({ src, isCached: true });
    
    image.onload = () => resolve({ src, isCached: false });
    image.onerror = err => reject(err);
  });
}
