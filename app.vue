<template>
  <button @click="handleSubscribe">Subscribe</button>
</template>

<script>
import { requestPermission } from './public/firebase.client';

export default {
  props: ['3'],
  methods: {
    async handleSubscribe() {
      // Ensure requestPermission is available only on the client
      if (typeof requestPermission !== 'function') return;

      
      const token = await requestPermission();
      if (token) {
        const url = `${process.env.BASE_URL}/user/subscribe`;
        const res = await fetch(url, {
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