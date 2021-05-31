<template>
  <nav id="navbar" class="bg-gray-300 sm:px-6 sm:py-4 shadow z-10">
    <div class="flex sm:flex-row flex-col container">
      <div class="font-bold text-2xl">
        <span class="text-blue-600">Daniel</span>
        <span class="text-red-600">Drew</span>
      </div>
      <div class="sm:px-12 sm:m-auto">
        <Link to="/shop" name="درباره ما" />
        <Link to="/about" name="اطلاعات" />
        <Link to="/login" name="لاگین" />
      </div>
    </div>
  </nav>
</template>

<script>
import Link from './NavbarLinks.vue'
export default {
      components:{
            Link
      }
};
</script>
