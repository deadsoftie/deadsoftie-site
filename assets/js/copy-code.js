(function () {
  'use strict';

  function addCopyButtons() {
    var blocks = document.querySelectorAll('div.highlight');

    blocks.forEach(function (block) {
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.textContent = 'copy';

      block.appendChild(btn);

      btn.addEventListener('click', function () {
        // Clone pre, strip line numbers, then read text
        var pre = block.querySelector('pre');
        if (!pre) return;

        var clone = pre.cloneNode(true);
        clone.querySelectorAll('.lineno').forEach(function (el) { el.remove(); });
        var text = clone.innerText || clone.textContent || '';

        navigator.clipboard.writeText(text.trimEnd()).then(function () {
          btn.textContent = 'copied!';
          btn.classList.add('copy-btn--success');
          setTimeout(function () {
            btn.textContent = 'copy';
            btn.classList.remove('copy-btn--success');
          }, 2000);
        }).catch(function () {
          // Fallback for older browsers
          var ta = document.createElement('textarea');
          ta.value = text.trimEnd();
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.textContent = 'copied!';
          setTimeout(function () { btn.textContent = 'copy'; }, 2000);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  } else {
    addCopyButtons();
  }
})();
