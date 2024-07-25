<script>
  import "$lib/styles/app.css";

  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  import Toast from "$lib/components/Toast.svelte";
  import Provider from "$lib/providers/Provider.svelte";
  import { user } from "$lib/utils/firebase";

  $: {
    if (browser) {
      $user ? goto("/chat") : goto("/");
    }
  }
</script>

<Provider>
  <slot />
  <Toast />
</Provider>

<style lang="postcss">
  :global(html) {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
