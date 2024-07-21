<script>
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import Toast from "$lib/components/Toast.svelte";
  import "$lib/styles/app.css";
  import { auth, firestore, user } from "$lib/utils/firebase";
  import { FirebaseApp } from "sveltefire";

  $: {
    if (browser) {
      $user ? goto("/chat") : goto("/");
    }
  }
</script>

<FirebaseApp {auth} {firestore}>
  <slot />
  <Toast />
</FirebaseApp>

<style lang="postcss">
  :global(html) {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
