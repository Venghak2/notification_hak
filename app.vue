<template>
  <button @click="handleSubscribe">Subscribe</button>
</template>

<script>
import { requestPermission } from './public/firebase.client';

export default {
  props: ['1'],
  methods: {
    async handleSubscribe() {
      // Ensure requestPermission is available only on the client
      if (typeof requestPermission !== 'function') return;

      const token = await requestPermission();
      if (token) {
        const res = await fetch('https://ef9a38381ae6.ngrok.app/user/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        const result = await res.json();
        alert(result.message);
      }
    },
  },
};
</script>