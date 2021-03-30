import Leaf from './leaf.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Leaf';
  img.width = 600;
  img.src = Leaf;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;