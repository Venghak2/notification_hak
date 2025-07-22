<template>
  <button @click="handleSubscribe">Subscribe</button>
</template>

<script>
import { requestPermission } from './public/firebase.client';

export default {
  methods: {
    async handleSubscribe() {

      if (typeof requestPermission !== 'function') return;
      // const config = useRuntimeConfig()
      //const url = `${config.public.base_url}/user/subscribe`;
      const url = `https://d16d48bb3a00.ngrok.app/user/subscribe`;
      const token = await requestPermission();
      if (token) {
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
