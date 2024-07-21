<script>
  import Icon from "@iconify/svelte";

  import heroImg from "$lib/assets/hero-img-chat-app.jpg";
  import Button from "./Widget/Button.svelte";
  import { loginState } from "$lib/utils/store";
</script>

<div
  class="m-auto w-4/5 h-4/5 grid grid-cols-3 gap-8 rounded-xl overflow-hidden p-8 bg-white"
>
  <div class="h-full col-span-1 flex flex-col gap-12 justify-center my-auto">
    <h1 class="text-4xl font-semibold">Sign Up</h1>
    <div class="flex flex-col gap-4">
      <form action="" class="flex flex-col gap-4">
        <label for="user-email" class="relative">
          <Icon
            icon="material-symbols:mail-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Your Email"
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="type-user-password" class="relative">
          <Icon
            icon="material-symbols:lock-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            name="type-user-password"
            id="type-user-password"
            placeholder="Your Password"
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="confirm-user-password" class="relative">
          <Icon
            icon="material-symbols:shield-lock-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            name="confirm-user-password"
            id="confirm-user-password"
            placeholder="Confirm Your Password"
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>

        <!-- <label
          for="accept-policy"
          class="flex items-center gap-2 text-xs cursor-pointer"
        >
          <input
            type="checkbox"
            name="accept-policy"
            id="accept-policy"
            class="w-4 h-4"
          />
          I agree to the Term & Conditions and Privacy Policy
        </label> -->

        <Button type="submit" className="mt-4">
          Sign Up
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            class="w-6 h-6"
          />
        </Button>
      </form>
    </div>

    <div class="flex items-center gap-1 text-sm">
      <p>You already have an account?</p>
      <button
        class="py-1 px-2 hover:underline text-primaryColor-700 hover:text-primaryColor-500"
        on:click={() => loginState.set("signin")}
      >
        Login
      </button>
    </div>
  </div>
  <div class="col-span-2 overflow-hidden rounded-2xl">
    <img src={heroImg} alt="" class="w-full h-full object-cover" />
  </div>
</div>

<style>
  /* #accept-policy {
    border-radius: 6px;
    vertical-align: middle;
    -webkit-appearance: none;
    border: 1px solid #33a3a3;
  }

  #accept-policy:checked {
    background-color: #33a3a3;
  } */
</style>
