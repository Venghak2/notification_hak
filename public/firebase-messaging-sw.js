// // TypeScript declarations for Firebase
// declare const firebase: {
//   initializeApp: (config: any) => any;
//   messaging: () => {
//     onBackgroundMessage: (callback: (payload: any) => void) => void;
//   };
// };


// // Service Worker context types
// declare const self: ServiceWorkerGlobalScope;

// importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// // Firebase configuration interface
// interface FirebaseConfig {
//   apiKey: string;
//   authDomain: string;
//   projectId: string;
//   storageBucket: string;
//   messagingSenderId: string;
//   appId: string;
//   measurementId?: string;
// }

// // Payload interface for background messages
// interface MessagePayload {
//   notification: {
//     title: string;
//     body: string;
//   };
//   data?: Record<string, string>;
// }

// const firebaseConfig: FirebaseConfig = {
//   apiKey: "AIzaSyDEknhMLtR7yGyjfjI3Reyn1WGvkL9K6aI",
//   authDomain: "notification-91d47.firebaseapp.com",
//   projectId: "notification-91d47",
//   storageBucket: "notification-91d47.firebasestorage.app",
//   messagingSenderId: "931826122946",
//   appId: "1:931826122946:web:7840927810f854470ebb5b",
//   measurementId: "G-30JJFRDNSX"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload: MessagePayload) => {
//   console.log("[firebase-messaging-sw.ts] Received background message ", payload);
//   const { title, body } = payload.notification;
  
//   self.registration.showNotification(title, {
//     body,
//     icon: '/logo.png',
//   });
// }); 

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Initialize Firebase app (use your Firebase config)
// const firebaseConfig   = {
//   apiKey: "AIzaSyDEknhMLtR7yGyjfjI3Reyn1WGvkL9K6aI",
//   authDomain: "notification-91d47.firebaseapp.com",
//   projectId: "notification-91d47",
//   storageBucket: "notification-91d47.firebasestorage.app",
//   messagingSenderId: "931826122946",
//   appId: "1:931826122946:web:7840927810f854470ebb5b",
//   measurementId: "G-30JJFRDNSX"
// };

// firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging.sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // replace with your icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
