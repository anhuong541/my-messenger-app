<script lang="ts">
  import { userAccessState } from "../store";
  import Login from "../lib/components/pages/login.svelte";
  import Register from "../lib/components/pages/register.svelte";
  import Layout from "./+layout.svelte";
  import { SignedIn, SignedOut } from "sveltefire";
  import { signOut } from "firebase/auth";
  import { user } from "$lib/utils/firebase";
  import { goto } from "$app/navigation";

  $: {
    if ($user?.uid) {
      goto("/chat");
    }
  }
</script>

<Layout>
  <main
    class="container w-screen h-screen m-auto flex justify-center items-center"
  >
    <SignedOut let:auth>
      {#if $userAccessState === "login"}
        <Login {auth} />
      {:else}
        <Register {auth} />
      {/if}
    </SignedOut>

    <SignedIn let:auth>
      it sign in {" "}
      <button on:click={() => signOut(auth)}>Sign Out</button>
    </SignedIn>
  </main>
</Layout>

<style lang="postcss">
</style>
