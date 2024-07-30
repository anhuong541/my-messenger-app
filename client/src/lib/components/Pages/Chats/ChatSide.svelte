<script>
  import defaultAvatar from "$lib/assets/default-avatar.webp";
  import groupPeople from "$lib/assets/group-people.jpg";

  import Icon from "@iconify/svelte";
  import { Avatar } from "flowbite-svelte";
  import ChatFeed from "./ChatFeed.svelte";

  import { friendSelected } from "$lib/utils/dataStore";

  const listOptions = [
    // { label: "Save", icon: "material-symbols:bookmark-outline" },
    { label: "Call", icon: "material-symbols:call-outline" },
    // { label: "Report", icon: "material-symbols:report-outline-rounded" },
    { label: "Video Call", icon: "material-symbols:videocam-outline-rounded" },
    { label: "More", icon: "material-symbols:more-horiz" },
  ];
</script>

<div class="col-span-6 flex flex-col border-r h-full">
  <div class="flex justify-between items-center border-b px-4 min-h-[70px]">
    <div class="flex items-center gap-2">
      <Avatar
        src={$friendSelected && $friendSelected?.type === "person"
          ? defaultAvatar
          : groupPeople}
        class="h-12 w-12 rounded-full"
      />
      <div class="flex flex-col">
        <h4 class="font-medium">
          {#if $friendSelected?.type === "person"}
            {$friendSelected?.username ?? ""}
          {:else}
            {$friendSelected?.groupName ?? ""}
          {/if}
        </h4>
        <p class="text-sm text-primaryColor-400">
          {#if $friendSelected?.type === "person"}
            {$friendSelected?.online ? "Online" : "Offline"}
          {:else}
            Active
          {/if}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-end gap-2">
      {#each listOptions as { label, icon }}
        <button class="rounded-full w-10 h-10 bg-primaryColor-100">
          <Icon {icon} class="h-6 w-6 m-auto" />
        </button>
      {/each}
    </div>
  </div>

  <ChatFeed />
</div>
