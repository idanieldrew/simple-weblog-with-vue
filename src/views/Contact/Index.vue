<template>
  <div>
    <Hero Image="/Images/Contact.jpg" alt="contact" Info="ارتباط با ما" />

    <div class="grid grid-cols-2 gap-8">
      <div class="col-span-1">نقشه</div>
      <div class="col-span-1 bg-gray-100 px-16 py-8 my-8 mx-auto">
        <form action="" class="bg-gray-100 p-6">
          <div class="p-4">
            <input
              type="text"
              placeholder="اسم خود را وارد کنید"
              class="bg-gray-200 rounded-xl focus:bg-white px-28 py-2"
            />
          </div>
          <div class="p-4">
            <input
              type="text"
              placeholder="شهر خود را وارد کنید"
              class="bg-gray-200 rounded-xl focus:bg-white px-28 py-2"
            />
          </div>
          <div class="p-4">
            <textarea
              cols="30"
              rows="10"
              class="bg-gray-200 rounded-xl focus:bg-white px-20 py-2"
            ></textarea>
          </div>
          <div class="p-4">
            <router-link
              to="/submit"
              class="
                bg-blue-600
                border
                text-center
                px-4
                py-2
                rounded
                text-white
                hover:bg-white
                hover:text-black
              "
              >ثبت</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/MainHero.vue";

export default {
  components: {
    Hero,
  },
};
</script>

<style></style>
