(function () {
  'use strict';
  var fill = document.getElementById('progress-bar-fill');
  var postContent = document.querySelector('.post-content');
  if (!fill || !postContent) return;

  var ticking = false;

  function updateProgress() {
    var rect = postContent.getBoundingClientRect();
    var scrolledPast = -rect.top;
    var readableHeight = rect.height - window.innerHeight;
    var progress;
    if (readableHeight <= 0) {
      progress = 100;
    } else {
      progress = (scrolledPast / readableHeight) * 100;
      if (progress < 0) progress = 0;
      if (progress > 100) progress = 100;
    }
    fill.style.width = progress + '%';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateProgress();
})();
