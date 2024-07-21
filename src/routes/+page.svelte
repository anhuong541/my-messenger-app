<script>
  import Login from "$lib/components/Login.svelte";
  import Register from "$lib/components/Register.svelte";
  import { loginState } from "$lib/utils/store";
</script>

<main class="h-screen w-screen flex bg-gray-100">
  {#if $loginState === "signin"}
    <Login />
  {:else}
    <Register />
  {/if}
</main>

<style>
</style>
