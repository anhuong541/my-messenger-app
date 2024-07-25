<script>
  import defaultAvatar from "$lib/assets/default-avatar.webp";

  import Icon from "@iconify/svelte";
  import { Avatar } from "flowbite-svelte";
  import ChatFeed from "./ChatFeed.svelte";
  import { friendSelected } from "$lib/utils/dataStore";

  const listOptions = [
    { title: "Save", icon: "material-symbols:bookmark-outline" },
    { title: "Call", icon: "material-symbols:call-outline" },
    { title: "Report", icon: "material-symbols:report-outline-rounded" },
    { title: "More", icon: "material-symbols:more-horiz" },
  ];
</script>

<div class="col-span-6 flex flex-col border-r h-full">
  <div class="flex justify-between items-center border-b px-4 min-h-[70px]">
    <div class="flex items-center gap-2">
      <Avatar
        src={$friendSelected && defaultAvatar}
        class="h-12 w-12 rounded-full"
      />
      <div class="flex flex-col">
        <h4 class="font-medium">{$friendSelected?.username ?? ""}</h4>
        <p class="text-sm text-primaryColor-400">
          {$friendSelected?.online ? "Active now" : "Offline"}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-end gap-2">
      {#each listOptions as { title, icon }}
        <button class="rounded-full w-10 h-10 bg-primaryColor-100">
          <Icon {icon} class="h-6 w-6 m-auto" />
        </button>
      {/each}
    </div>
  </div>

  <ChatFeed />
</div>
