let totalFrames = 0
  function onImgClick() {
  let aElement = document.querySelector('.a');
  aElement.setAttribute('href', 'javascript:');
  if (totalFrames > 0) {
    
  }
  else {
    let totalFrames = totalFrames + 1
    let imgElement = document.querySelector('.img');
    imgElement.setAttribute('src', 'img/' + totalFrames + '.png');
  }
}

function onImgLoad() {
  while (totalFrames < 0) {
    let totalFrames =+ 1
    let imgElement = document.querySelector('.img');
    imgElement.setAttribute('src', 'img/' + totalFrames + '.png');
  }
}