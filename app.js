const $ = (s) => document.querySelector(s);
$("#year").textContent = new Date().getFullYear();
const menuToggle = $("#menuToggle"), nav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
$("#refreshNotices").addEventListener("click", () => {
  $("#noticeStatus").textContent = "To load shared live announcements, finish the Firebase setup in firebase-config.js and deploy the site.";
});
$("#announcementForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#adminStatus").textContent = "Publishing is not enabled yet. Complete Firebase setup and deploy the secure announcement function first.";
});
$("#loginAdmin").addEventListener("click", () => {
  $("#adminStatus").textContent = "Admin login is not connected yet. Configure Firebase Authentication and authorised admin accounts before publishing.";
});
$("#logoutAdmin").addEventListener("click", () => {
  $("#adminEmail").value = ""; $("#adminPassword").value = "";
  $("#postFields").hidden = true;
  $("#adminStatus").textContent = "Signed out.";
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
