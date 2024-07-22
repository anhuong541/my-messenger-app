<script>
  import Icon from "@iconify/svelte";

  import heroImg from "$lib/assets/hero-img-chat-app.jpg";
  import Button from "../../Widget/Button.svelte";
  import { isLoading, loginState } from "$lib/utils/store";
  import { onSubmitUserAction } from "$lib/utils/databaseAction";
  import { handleFileChange, triggerToast } from "$lib/utils";
  import { Collection } from "sveltefire";
  import { doc, setDoc } from "firebase/firestore";
  import { firestore } from "$lib/utils/firebase";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let username = "";
  let gender = "";
  // let avatarImg = "";

  $: disableBtn =
    email !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    username !== "" &&
    gender !== ""
      ? false
      : true;

  const onSubmit = async () => {
    let res = null;
    if (password === confirmPassword) {
      res = await onSubmitUserAction(email, password);
      email = "";
      password = "";
    } else {
      triggerToast("Your passwords does not match", "warning");
    }

    await setDoc(doc(firestore, "users", res?.user?.uid ?? "error"), {
      uid: res?.user?.uid ?? "error",
      username,
      date: Date.now(),
      online: true,
      email,
      gender,
    });
  };
</script>

<div
  class="m-auto w-4/5 h-4/5 grid grid-cols-3 gap-8 rounded-2xl overflow-hidden p-8 bg-white"
>
  <div class="h-full col-span-1 flex flex-col gap-12 justify-center my-auto">
    <h1 class="text-4xl font-semibold">Create your account</h1>
    <div class="flex flex-col gap-4">
      <form class="flex flex-col gap-4" on:submit={onSubmit}>
        <label for="user-email" class="relative">
          <Icon
            icon="material-symbols:mail-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
          />
          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Your Email"
            bind:value={email}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="username" class="relative">
          <Icon
            icon="material-symbols:person-outline-rounded"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Username"
            bind:value={username}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="gender" class="relative">
          <Icon
            icon="material-symbols:account-circle-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
          />
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="Your Gender"
            bind:value={gender}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="type-user-password" class="relative">
          <Icon
            icon="material-symbols:lock-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
          />
          <input
            type="text"
            name="type-user-password"
            id="type-user-password"
            placeholder="Your Password"
            bind:value={password}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>
        <label for="confirm-user-password" class="relative">
          <Icon
            icon="material-symbols:shield-lock-outline"
            class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
          />
          <input
            type="text"
            name="confirm-user-password"
            id="confirm-user-password"
            placeholder="Confirm Your Password"
            bind:value={confirmPassword}
            class="border py-3 px-6 pl-12 rounded-xl w-full"
          />
        </label>

        <!-- upload file to somewhere is not a database -->
        <!-- <label for="upload-avatar" class="relative">
          <p class="text-xs">please upload your avatar if you want</p>
          <Fileupload bind:value={avatarImg} on:change={handleFileChange} />
        </label> -->

        <Button
          type="submit"
          className="mt-4"
          isLoading={$isLoading}
          disabled={disableBtn}
        >
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
