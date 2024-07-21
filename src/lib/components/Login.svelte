<script>
  import heroImg from "$lib/assets/hero-img-chat-app.jpg";

  import Icon from "@iconify/svelte";
  import Button from "./Widget/Button.svelte";
  import { isLoading, loginState } from "$lib/utils/store";
  import { user } from "$lib/utils/firebase";
  import { onSubmitUserAction, signOut } from "$lib/utils/databaseAction";

  let email = "";
  let password = "";

  $: console.log("login user: ", $user);

  const onSubmit = async () => {
    await onSubmitUserAction(email, password);
    email = "";
    password = "";

    console.log("it trigger!!!!");
  };
</script>

<div
  class="m-auto w-4/5 h-4/5 grid grid-cols-3 gap-8 rounded-2xl overflow-hidden p-8 bg-white"
>
  <div class="h-full col-span-1 flex flex-col gap-12 justify-center my-auto">
    <h1 class="text-4xl font-semibold">Sign In</h1>
    <div class="flex flex-col gap-4">
      <form class="flex flex-col gap-4" on:submit={onSubmit}>
        <label for="user-email" class="relative">
          <Icon
            icon="material-symbols:mail-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Email"
            bind:value={email}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="user-password" class="relative">
          <Icon
            icon="material-symbols:lock-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            name="user-password"
            id="user-password"
            placeholder="Password"
            bind:value={password}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>

        <Button
          type="submit"
          className="mt-4"
          isLoading={$isLoading}
          disabled={email !== "" && password !== "" ? false : true}
        >
          Access My Account
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            class="w-6 h-6"
          />
        </Button>
      </form>
    </div>

    <div class="flex items-center gap-1 text-sm">
      <p>Don't have an account?</p>
      <button
        class="py-1 px-2 hover:underline text-primaryColor-700 hover:text-primaryColor-500"
        on:click={() => loginState.set("signup")}
      >
        Register
      </button>
    </div>
  </div>
  <div class="col-span-2 overflow-hidden rounded-2xl">
    <img src={heroImg} alt="" class="w-full h-full object-cover" />
  </div>
</div>
