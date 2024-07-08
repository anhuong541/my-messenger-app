<script lang="ts">
  import Login from "../components/pages/login.svelte";
  import Register from "../components/pages/register.svelte";
  import { userAccessState } from "../store";
  import Layout from "./+layout.svelte";
</script>

<Layout>
  <main
    class="container w-screen h-screen m-auto flex justify-center items-center"
  >
    {#if $userAccessState === "login"}
      <Login />
    {:else}
      <Register />
    {/if}
  </main>
</Layout>
