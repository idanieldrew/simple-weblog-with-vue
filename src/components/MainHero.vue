<template>
  <div class="z-10 relative h-80">
    <img :src="Image" :alt="alt" class="w-full h-full object-cover" />
    <div class="bg-gray-400 absolute inset-0 opacity-40"></div>
    <div
      class="
        flex flex-col
        absolute
        inset-0
        items-center
        justify-center
        sm:justify-end
        text-5xl
        font-serif
        text-white
      "
    >
      {{ Info }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Image: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      require: true,
    },
    Info: {
      type: String,
      require: true,
    },
  },
};
</script>

<style></style>
