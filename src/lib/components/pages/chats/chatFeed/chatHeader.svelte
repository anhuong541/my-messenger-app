<script lang="ts">
  import Icon from "@iconify/svelte";
  import { tabMobileView, viewResponsive } from "../../../../../store";
  import { signOutFirebase } from "$lib/utils";
  import { goto } from "$app/navigation";

  let status: "online" | "offline" | "isTyping" = "online";

  $: listOption = [
    { name: "call", handler: () => {}, icon: "fluent:call-32-regular" },
    { name: "video", handler: () => {}, icon: "prime:video" },
    { name: "info", handler: () => tabMobileView.set("info"), icon: "ph:info" },
    {
      name: "profile",
      handler: () => goto("/profile"),
      icon: "iconamoon:profile-light",
    },
    {
      name: "signout",
      handler: () => signOutFirebase(),
      icon: "uil:signout",
    },
    {
      name: "return",
      handler: () => tabMobileView.set("sidebar"),
      icon: "carbon:return",
    },
    // { icon: "iwwa:option", handler: () => {} },
  ].filter((item) =>
    $viewResponsive === "Mobile & Tablet"
      ? item
      : item.name !== "return" && item.name !== "info"
  );
</script>

<div class="flex justify-between items-center py-4 border-b">
  <div class="flex flex-col">
    <h1 class="text-2xl font-medium">Name Somebody</h1>
    <!-- status (like user is typing or he is online/offline) -->
    <span class="flex items-center gap-1 text-sm text-primaryColor-500">
      {#if status === "online"}
        <Icon icon="radix-icons:dot-filled" class="w-6 h-6" /> Online
      {/if}

      <!-- <Icon icon="svg-spinners:3-dots-fade" class="w-6 h-6" /> Is typing -->
      <!-- <Icon icon="radix-icons:dot"  class="w-6 h-6" /> Offline -->
    </span>
  </div>

  <div id="list-option" class="flex gap-2">
    {#each listOption as { icon, handler }}
      <button on:click={handler}>
        <Icon
          {icon}
          class="w-8 h-8 rounded-md p-1 cursor-pointer hover:bg-primaryColor-200"
        />
      </button>
    {/each}
  </div>
</div>

<style></style>
