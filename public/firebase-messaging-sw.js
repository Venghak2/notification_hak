
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig   = {
  apiKey: "AIzaSyDEknhMLtR7yGyjfjI3Reyn1WGvkL9K6aI",
  authDomain: "notification-91d47.firebaseapp.com",
  projectId: "notification-91d47",
  storageBucket: "notification-91d47.firebasestorage.app",
  messagingSenderId: "931826122946",
  appId: "1:931826122946:web:7840927810f854470ebb5b",
  measurementId: "G-30JJFRDNSX"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Data notifi:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

