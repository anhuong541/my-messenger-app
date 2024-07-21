<script>
  import "$lib/styles/app.css";
  import { auth, firestore } from "$lib/utils/firebase";
  import { FirebaseApp } from "sveltefire";
</script>

<FirebaseApp {auth} {firestore}>
  <slot />
</FirebaseApp>

<style lang="postcss">
  :global(html) {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
