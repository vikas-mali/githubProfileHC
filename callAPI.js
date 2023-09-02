const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    const profileImgURL = data.avatar_url;
    const profileName = data.name;
    const followers = data.followers;
    document.getElementById("profileImg").setAttribute("src", profileImgURL);
    document.querySelector(".cardProfileName").textContent = profileName;
    document.querySelector(".followers").textContent = followers;
  }
};
xhr.send();
