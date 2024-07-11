<script>
  import { userAccessState } from "../../../store";

  import heroLoginImg from "$lib/assets/login-hero.webp";
  import Icon from "@iconify/svelte";
</script>

<div
  class="grid lg:grid-cols-2 grid-cols-1 lg:w-[80vw] lg:h-[80vh] h-full w-full lg:rounded-[20px] sm:py-8 sm:px-16 px-8 gap-16 bg-gray-100"
>
  <div class="my-auto lg:max-w-[500px]">
    <h1 class="font-semibold text-4xl mb-8">Welcome back</h1>
    <form action="" class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <label class="relative flex" for="username">
          <input
            type="text"
            class="p-3 rounded-md text-sm w-full"
            placeholder="Username"
            id="username"
          />
          <Icon
            icon="solar:user-linear"
            width="18"
            height="18"
            style="color: black"
            class="absolute right-3 top-[50%] -translate-y-1/2"
          />
        </label>
        <label class="relative flex" for="myPassword">
          <input
            type="text"
            id="myPassword"
            class="p-3 rounded-md text-sm w-full"
            placeholder="Password"
          />
          <Icon
            icon="fluent-mdl2:password-field"
            width="18"
            height="18"
            style="color: black"
            class="absolute right-3 top-[50%] -translate-y-1/2"
          />
          <!-- // Password -->
        </label>
        <div class="flex justify-between">
          <label
            for="remember-me"
            class="text-xs flex gap-2 items-center text-gray-500"
          >
            <input
              type="checkbox"
              name=""
              id="remember-me"
              class="w-4 h-4 accent-primaryColor-500"
            />
            Remember Me
          </label>
          <button
            on:click={() => userAccessState.set("register")}
            class="hover:underline text-primaryColor-500 text-sm"
          >
            Don't have an account?
          </button>
        </div>
      </div>
      <button
        type="submit"
        class="border rounded-md bg-primaryColor-500 text-white px-4 py-2"
      >
        Sign in
      </button>
    </form>
  </div>
  <div class="w-full h-full relative overflow-hidden lg:flex hidden">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={heroLoginImg}
      srcset={heroLoginImg}
      alt="Hero Login Image"
      class="object-contain rounded-2xl my-auto"
    />
  </div>
</div>

<style></style>
