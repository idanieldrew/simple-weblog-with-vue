<template>
  <router-link class="sm:px-6 px-2 py-4 sm:py-0 text-sm text-white hover:text-red-600 sm:inline-block block" :to="to">{{ name }}</router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>