<template>
  <div>
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
