<script>
  import { user } from "$lib/utils/firebase";

  $: console.log("userFirebase:  ", $user);
</script>

<main class="flex h-screen w-screen">
  <div
    class="rounded-3xl min-w-[500px] min-h-[500px] bg-white m-auto flex flex-col gap-4 p-4"
  >
    <h1 class="font-medium text-2xl mx-auto">Your Profile</h1>
    <div></div>
  </div>
</main>

<style></style>
