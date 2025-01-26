import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

// Get the Firebase Analytics instance
const analytics = getAnalytics();

// Track the "Send Me a Message" form submission
document.querySelector("form[action='/send_email']").addEventListener("submit", (event) => {
  logEvent(analytics, "send_message", {
    category: "engagement",
    label: "User sent a message through the contact form",
  });
  console.log("Send message event logged");
});

// Track CV download
document.querySelector(".cv-download-link").addEventListener("click", () => {
  logEvent(analytics, "download_cv", {
    category: "engagement",
    label: "User downloaded the CV",
  });
  console.log("Download CV event logged");
});
