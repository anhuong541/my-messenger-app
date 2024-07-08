<script>
  import "$lib/styles/app.css";
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.primaryColor.700);
  }
</style>
