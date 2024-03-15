document.addEventListener("DOMContentLoaded", function () {
  const numOfUnread = document.querySelector(".counter");
        numOfUnread.textContent = document.querySelectorAll(".unread").length;

  const markRead = document.querySelector("button");
  markRead.addEventListener("click", function () {
    const unread = document.querySelectorAll(".unread");
    const unreadItem = document.querySelectorAll(".unread-item");

    for (let i = 0; i < unread.length; i++) {
      unread[i].classList.remove("unread");
      unreadItem[i].classList.remove("unread-item");
      numOfUnread.textContent = 0;
    }
  });

  const username = document.querySelectorAll(".username");
  document.querySelectorAll(".user-photo > img").forEach((img, i) => {
    img.setAttribute("alt", `${username[i].innerText}`);
  });
});
