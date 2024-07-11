<script lang="ts">
  import Icon from "@iconify/svelte";
  import { tabMobileView, viewResponsive } from "../../../../../store";

  let status: "online" | "offline" | "isTyping" = "online";

  const fakeListOption = [
    { name: "call", handler: () => {}, icon: "fluent:call-32-regular" },
    { name: "video", handler: () => {}, icon: "fluent:video-32-light" },
    { name: "info", handler: () => tabMobileView.set("info"), icon: "ph:info" },
    {
      name: "return",
      handler: () => tabMobileView.set("sidebar"),
      icon: "carbon:return",
    },
    // { icon: "iwwa:option", handler: () => {} },
  ];
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
    {#each fakeListOption.filter( (item) => ($viewResponsive === "Mobile & Tablet" ? item : item.name !== "return" && item.name !== "info") ) as { icon, handler }}
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
