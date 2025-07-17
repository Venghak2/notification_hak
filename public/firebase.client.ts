import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

let requestPermission;

// Ensure this code runs only in the browser
if (process.client) {
  // const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_SENDER_ID,
  //   appId: process.env.FIREBASE_APP_ID,
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyDEknhMLtR7yGyjfjI3Reyn1WGvkL9K6aI",
    authDomain: "notification-91d47.firebaseapp.com",
    projectId: "notification-91d47",
    storageBucket: "notification-91d47.firebasestorage.app",
    messagingSenderId: "931826122946",
    appId: "1:931826122946:web:7840927810f854470ebb5b",
    measurementId: "G-30JJFRDNSX"
  };
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: process.env.FIREBASE_VAPID_KEY,
        });
        console.log('Token:', token);
        return token;
      } else {
        alert('Notification permission denied.');
      }
    } catch (error) {
      console.error('Error getting token:', error);
    }
  };
} else {
  // SSR fallback
  requestPermission = () => Promise.resolve(null);
}

export { requestPermission };