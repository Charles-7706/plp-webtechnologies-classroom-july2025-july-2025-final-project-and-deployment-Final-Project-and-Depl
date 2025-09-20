function showMenu () {
    const options = document.getElementById('options');
    const ul = document.querySelector('ul');
    ul.classList.toggle('show');
    console.log('clicked');

}
showMenu();

const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.muted = true; // prevent autoplay block
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

