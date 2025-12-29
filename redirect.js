  const params = new URLSearchParams(location.search);
  const redirectUrl = params.get("url");

  const content = document.getElementById("card-content");
  const loading = document.getElementById("loading");
  const errorBox = document.getElementById("error");
  const antibotBox = document.getElementById("antibot");
  const redirectMsg = document.getElementById("redirect-msg");
  const redirectText = document.getElementById("redirect-text");
  const btn = document.getElementById("continueBtn");
  const humanBtn = document.getElementById("humanBtn");

  let interacted = false;
  let firstClickTime = 0;

  ["mousemove", "touchstart", "keydown"].forEach(e =>
    window.addEventListener(e, () => interacted = true, { once: true })
  );
  
  let mousePoints = [];
  let lastMove = 0;
  
  window.addEventListener("mousemove", e => {
    const now = performance.now();
    if (now - lastMove < 16) return;
    lastMove = now;
  
    mousePoints.push({
      x: e.clientX,
      y: e.clientY,
      t: now
    });
  
    if (mousePoints.length > 120) mousePoints.shift();
  });
  
  function mouseEntropy() {
    if (mousePoints.length < 15) return 0;
  
    let distance = 0;
    let angleChanges = 0;
  
    for (let i = 2; i < mousePoints.length; i++) {
      const p0 = mousePoints[i - 2];
      const p1 = mousePoints[i - 1];
      const p2 = mousePoints[i];
  
      const dx1 = p1.x - p0.x;
      const dy1 = p1.y - p0.y;
      const dx2 = p2.x - p1.x;
      const dy2 = p2.y - p1.y;
  
      distance += Math.hypot(dx2, dy2);
  
      const dot = dx1 * dx2 + dy1 * dy2;
      const mag1 = Math.hypot(dx1, dy1);
      const mag2 = Math.hypot(dx2, dy2);
  
      if (mag1 && mag2) {
        const angle = Math.acos(
          Math.min(Math.max(dot / (mag1 * mag2), -1), 1)
        );
        if (angle > 0.3) angleChanges++;
      }
    }
  
    return distance * angleChanges;
  }
  
  function lowEntropy() {
    return mouseEntropy() < 800;
  }

  function fingerprint() {
    return btoa(
      navigator.userAgent +
      screen.width +
      screen.height +
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
  }

  const RATE_KEY = "bz_redirect_log";
  const LIMIT = 3;
  const WINDOW = 60 * 1000;

  function logRedirect() {
    const now = Date.now();
    const data = JSON.parse(localStorage.getItem(RATE_KEY) || "[]")
      .filter(t => now - t < WINDOW);
    data.push(now);
    localStorage.setItem(RATE_KEY, JSON.stringify(data));
    return data.length;
  }

  function isRateLimited() {
    const data = JSON.parse(localStorage.getItem(RATE_KEY) || "[]");
    const now = Date.now();
    return data.filter(t => now - t < WINDOW).length >= LIMIT;
  }

  function isBot() {
    if (navigator.webdriver) return true;
    if (!navigator.languages || navigator.languages.length === 0) return true;
    if (!interacted) return true;
    if (/Headless|Phantom|Playwright|Puppeteer/i.test(navigator.userAgent)) return true;
    return false;
  }

  function showError(title, msg) {
    errorBox.innerHTML = `
      <h3>${title}</h3>
      <p>${msg}</p>
      <p><a href="./" style="color: #a2a3a6;">&lt; Quay lại</a></p>
    `;
    errorBox.classList.remove("hidden");
  }

  function showRedirectMessage() {
    const url = decodeURIComponent(redirectUrl);
    redirectText.innerHTML = `
      Đang chuyển hướng đến link, nhấn
      <a href="${url}" rel="noreferrer">vào đây</a>
      nếu nó không tự động chuyển
    `;

    loading.classList.add("hidden");
    redirectMsg.classList.remove("hidden");

    setTimeout(() => {
      location.href = url;
    }, 100);
  }

  btn.onclick = () => {
    const now = Date.now();
    if (!firstClickTime) firstClickTime = now;

    btn.disabled = true;
    content.remove();
    loading.classList.remove("hidden");

    setTimeout(() => {
      if (now - firstClickTime < 800) {
        loading.classList.add("hidden");
        antibotBox.classList.remove("hidden");
        return;
      }

      if (isBot() || isRateLimited() || lowEntropy()) {
        loading.classList.add("hidden");
        antibotBox.classList.remove("hidden");
        return;
      }

      logRedirect();
      showRedirectMessage();
    }, 1000);
  };

  humanBtn.onclick = () => {
    antibotBox.classList.add("hidden");
    loading.classList.remove("hidden");

    logRedirect();

    setTimeout(showRedirectMessage, 1250);
  };
  
  if (!redirectUrl) {
    window.location.replace("./");
  }