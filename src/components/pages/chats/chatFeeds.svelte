<script lang="ts">
  import Icon from "@iconify/svelte";

  let status: "online" | "offline" | "isTyping" = "online";

  const fakeListOption = [
    { icon: "fluent:call-32-regular" },
    { icon: "fluent:video-32-light" },
    { icon: "iwwa:option" },
  ];
</script>

<div class="col-span-7 flex flex-col gap-2 px-4 py-4 h-screen overflow-hidden">
  <!-- chat header -->
  <div class="flex justify-between items-center py-4">
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
      {#each fakeListOption as { icon }}
        <Icon
          {icon}
          class="w-8 h-8 rounded-md p-1 cursor-pointer hover:bg-primaryColor-200"
        />
      {/each}
    </div>
  </div>
  <div class="flex flex-col justify-between gap-2 h-full">
    <!-- chat feed -->
    <div class="h-full">Chat Render Events</div>
    <form class="flex gap-2 w-full">
      <input
        type="text"
        class="w-full py-2 px-4"
        placeholder="Typing your message..."
      />
      <button
        type="submit"
        class="py-2 px-4 flex items-center justify-center gap-1 bg-primaryColor-500 text-white rounded-md"
      >
        Send <Icon icon="iconamoon:send-light" />
      </button>
    </form>
  </div>
</div>

<style></style>
