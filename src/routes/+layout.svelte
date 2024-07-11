<script>
  import "$lib/styles/app.css";
  import { FirebaseApp } from "sveltefire";
  import { auth, firestore } from "$lib/utils/firebase";
</script>

<FirebaseApp {auth} {firestore}>
  <slot />
</FirebaseApp>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.primaryColor.700);
  }
</style>
