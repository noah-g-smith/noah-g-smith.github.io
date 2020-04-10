// Acticates the image gallery.

function activateGallery() {
  let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img');
  let mainProject = document.querySelector('.gallery-project');

  thumbnails.forEach(function(thumbnail) {
    // Preload images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let newTitle = thumbnail.dataset.title;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener('click', function() {

      // Change which image has class 'current'
      document.querySelector('.current').classList.remove('current');
      thumbnail.parentNode.classList.add('current');

      // Change gallery project
      let path66 = thumbnail.dataset.project;
      mainProject.setAttribute('src', path66);
    });
  });
}
