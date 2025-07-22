import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

let requestPermission;

if (import.meta.client) {
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
  requestPermission = () => Promise.resolve(null);
}

export { requestPermission };
