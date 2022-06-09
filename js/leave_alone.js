window.onload = function () {
  // Check title
  var originalTitle = localStorage.getItem("lmtaOrignalTitle");
  if (originalTitle == null) {
    originalTitle = document.title;
    localStorage.setItem("lmtaOrignalTitle", document.title);
  }

  const titleElement = document.querySelector("title");
  new MutationObserver(function (mutations) {
    if (document.title == originalTitle) return;
    document.title = originalTitle;
  }).observe(titleElement, {
    subtree: true,
    characterData: true,
    childList: true,
  });

  // Check favicon
  var originalFavicon = "";
  const localStorageFavicon = localStorage.getItem("lmtaOrignalFavicon");
  if (localStorageFavicon !== null) {
    originalFavicon = localStorageFavicon;
  }
  const setOriginalFavicon = function (newFavicon) {
    originalFavicon = newFavicon;
    localStorage.setItem("lmtaOrignalFavicon", newFavicon);
  };

  document
    .querySelector("head")
    .addEventListener("DOMNodeInserted", (event) => {
      const { target } = event;
      if (target == undefined || target.getAttribute == undefined) {
        return;
      }
      if (
        target.getAttribute("rel") === "icon" ||
        target.getAttribute("rel") === "shortcut icon"
      ) {
        if (originalFavicon == "") {
          setOriginalFavicon(target.href);
          return;
        }
        target.href = originalFavicon;
      }
    });
};
