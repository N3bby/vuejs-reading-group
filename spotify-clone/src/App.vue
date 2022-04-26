<template>
  <button @click="login">Login</button>
  <router-view/>
</template>

<script lang="ts">
export default {
  methods: {
    login() {
      window.location.href = window.location.origin + '/api/login';
    }
  }
};
</script>

<style lang="scss">

</style>
