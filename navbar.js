document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load navbar.");
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById("navbar").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading the navbar:", error);
      });
});
