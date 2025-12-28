
  const params = new URLSearchParams(location.search);
  const redirectUrl = params.get("url");

  const content = document.getElementById("card-content");
  const loading = document.getElementById("loading");
  const errorBox = document.getElementById("error");
  const btn = document.getElementById("continueBtn");

  function showError(title, msg) {
    errorBox.innerHTML = `
      <h3>${title}</h3>
      <p>${msg}</p>
      <p><a href="./">&lt; Quay lại</a></p>
    `;
    errorBox.classList.remove("hidden");
  }

  btn.onclick = () => {
    btn.disabled = true; // chống spam click

    // Clear nội dung + show loading (giống F95)
    content.remove();
    loading.classList.remove("hidden");

    // Delay nhẹ cho UX
    setTimeout(() => {
      if (!redirectUrl) {
        loading.classList.add("hidden");
        showError("Lỗi", "Link chuyển hướng không hợp lệ.");
        return;
      }

      try {
        location.href = decodeURIComponent(redirectUrl);
      } catch (e) {
        loading.classList.add("hidden");
        showError("Lỗi", "Không thể chuyển hướng tới link này.");
      }
    }, 600);
  };