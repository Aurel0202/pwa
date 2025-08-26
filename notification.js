const notification = () => {
  const notifBtn = document.querySelector(".notif-me");
  notifBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let myNotification = null;

    const options = {
      body: "Texte de la notif",
      icon: "/icons/favicon-16x16.png",
      url: "https://cepegra.be",
      vibrate: [200, 100, 200, 100, 200, 100, 200],
    };
    if (!("Notification" in window)) {
      alert("Pas de notifs dispos dans ce navigateur");
    } else if (Notification.permission === "granted") {
      console.log("Notif accepted 1");
      myNotification = new Notification("Hello", options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notif accepted 2");
          myNotification = new Notification("Hello", options);
        }
      });
    }
    myNotification.onclick = () => {
      window.open("https://cepegra.be", "_blank");
    };
    myNotification = null;
  });
};

notification();
