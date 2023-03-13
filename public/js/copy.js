const copyButton = document.querySelector("#copy-button");
copyButton.addEventListener("click", copyForm);

function copyForm() {
  const short_url = document.querySelector("#short_url").value;
  navigator.clipboard.writeText(short_url)
    .then(() => alert("Short URL copied!"))
    .catch(() => alert("Unable to copy short URL!"));
}
