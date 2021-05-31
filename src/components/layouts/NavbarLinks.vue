<template>
  <router-link class="sm:px-6 text-sm text-black hover:text-red-600" :to="to">{{ name }}</router-link>
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