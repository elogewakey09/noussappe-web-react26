importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAOLOeNj13BNCZ2tOJstEtd64WPwq-J-LM",
  authDomain: "noussape.firebaseapp.com",
  projectId: "noussape",
  storageBucket: "noussape.appspot.com",
  messagingSenderId: "10083899450",
  appId: "1:10083899450:web:21392b8b506218b28fbd03"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
