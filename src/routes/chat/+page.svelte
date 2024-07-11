<script lang="ts">
  import { onMount } from "svelte";
  import { ChatInfo, Sidebar, ChatFeeds } from "$lib/components/pages/chats";
  import { tabMobileView, viewResponsive } from "../../store";
  import { SignedIn, SignedOut } from "sveltefire";
  import { user } from "$lib/utils/firebase";
  import { goto } from "$app/navigation";

  let responsiveView: "PC" | "Mobile & Tablet" | "Big Tablet" | null = null;

  $: () => {
    if ($user?.uid === undefined) {
      goto("/");
    }
  };

  onMount(() => {
    responsiveView =
      window?.innerWidth > 1440
        ? "PC"
        : window?.innerWidth < 1024
          ? "Mobile & Tablet"
          : "Big Tablet";

    localStorage.setItem("view", responsiveView);
    viewResponsive.set(responsiveView);
  });
</script>

<SignedOut>you are signing out!!!</SignedOut>

<SignedIn>
  <main
    class={`h-screen w-screen grid grid-cols-12 gap-2 ${responsiveView === "PC" || responsiveView === "Big Tablet" ? "p-2" : ""}`}
  >
    {#if responsiveView === "PC" || responsiveView === "Big Tablet"}
      <div
        class="xl:col-span-10 col-span-12 grid grid-cols-10 gap-6 bg-gray-100 rounded-3xl"
      >
        <Sidebar colSpan="col-span-3" />
        <ChatFeeds colSpan="col-span-7" />
      </div>
      <ChatInfo colSpan="col-span-2" />
    {:else if responsiveView === null}
      <div></div>
    {:else if $tabMobileView === "sidebar"}
      <Sidebar colSpan="col-span-12 bg-gray-100" />
    {:else if $tabMobileView === "chatfeed"}
      <ChatFeeds colSpan="col-span-12 bg-gray-100" />
    {:else if $tabMobileView === "info"}
      <ChatInfo colSpan="col-span-12 bg-gray-100" />
    {/if}
  </main>
</SignedIn>

<style lang="postcss">
</style>
