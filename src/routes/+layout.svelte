<script>
  import "$lib/styles/app.css";
  import { FirebaseApp } from "sveltefire";
  import { auth, firestore, user } from "$lib/utils/firebase";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  $: {
    if (browser) {
      if ($user?.uid) {
        goto("/chat");
      } else {
        goto("/");
      }
    }
  }
</script>

<FirebaseApp {auth} {firestore}>
  <slot />
</FirebaseApp>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.primaryColor.700);
  }
</style>
