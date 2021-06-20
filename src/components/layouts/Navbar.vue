<template>
  <nav
    id="nav"
    class="w-full bg-transparent sm:px-6 px-4 py-2 sm:py-4 shadow z-20 fixed"
  >
    <div class="flex sm:flex-row flex-col justify-between container">
      <div class="font-bold text-2xl flex flex-row justify-between">
        <div>
          <span class="text-blue-600">Daniel</span>
          <span class="text-red-600">Drew</span>
        </div>
        <div class="sm:hidden">
          <button @click="toggle" v-show="isActive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z" />
            </svg>
          </button>
          <button v-show="!isActive" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="sm:px-12 sm:m-auto sm:py-0 py-3 w-full"
        :class="{ hidden: isActive }"
      >
        <Link to="/" name="صفحه اصلی" />
        <Link to="/about" name="درباره ما" />
        <Link to="/information" name="اطلاعات" />
        <Link to="/contact" name="ارتباط با ما" />
      </div>
      <div :class="{ hidden: isActive }">
        <form action="">
          <input
            type="text"
            placeholder="جستجو کنید .."
            class="
              rounded-lg
              text-sm
              px-4
              py-2
              m-auto
              border
              focus:border-red-800
              container
              outline-none
            "
            ref="search"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import Link from "./NavbarLinks.vue";
export default {
  components: {
    Link,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = this.isActive ? false : true;
    },
  },
  mounted() {
    this.$refs.search.focus();
  },
};
</script>
