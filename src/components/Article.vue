<template>
  <div class="grid grid-cols-5 mt-16">
    <img
      class="col-span-3 h-80 w-full object-cover pr-2"
      src="/Images/Article.jpg"
      alt="article"
    />

    <div class="col-span-2 w-full pr-2">
      <div class="text-sm">خوش امدید به سایت</div>
      <div class="font-bold text-3xl my-1.5 animate-pulse italic hover:text-red-600">
        <router-link to="articles/مقاله-اول"> DanielDrew </router-link>
      </div>
      <div
        class="
          text-sm
          w-full
          sm:leading-10
          tracking-widest
          text-right text-black text-opacity-50
          whitespace-normal
          break-words
        "
      >
        اگر برنامه ای که در سطح کاربر اجرا می شود نیاز به یک سرویس سیستمی داشته
        باشد مجبور خواهد بود که فراخوان سیستمی را اجرا کند تا کنترل ماشین از سطح
        کاربر به سطح برده و به سیستم عامل بسپارد سپس سیستم عامل با توجه به
        پارامترهای ارسال شده متوجه خواسته فرایند متقاضی شده و ان را اجرا می کند
        و سپس کنترل را به دستور بعد از فراخوان سیستمی برمی گرداند...
      </div>
      <div class="mt-6 text-black text-opacity-25 flex flex-row">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M14.31 2l.41 2.48C13.87 4.17 12.96 4 12 4c-.95 0-1.87.17-2.71.47L9.7 2h4.61m.41 17.52L14.31 22H9.7l-.41-2.47c.84.3 1.76.47 2.71.47.96 0 1.87-.17 2.72-.48M16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12s-1.19-4.81-3.04-6.27L16 0zm-4 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
            />
          </svg>
        </div>
        <div>5 دقیقه پیش</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
