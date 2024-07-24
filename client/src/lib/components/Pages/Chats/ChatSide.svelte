<script>
  import fakeImg from "$lib/assets/luka-modric-avatar.jpg";
  import Icon from "@iconify/svelte";
  import { Avatar } from "flowbite-svelte";
  import ChatFeed from "./ChatFeed.svelte";

  const fakeFriend = {
    name: "Bruno Mark",
    image: fakeImg,
    lastMsg: "Nice to see ya!",
    online: true,
    lastTimeMsg: 1721560240,
  };

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
      <Avatar src={fakeFriend.image} class="h-12 w-12 rounded-full" />
      <div class="flex flex-col">
        <h4 class="font-medium">{fakeFriend.name}</h4>
        <p class="text-sm text-gray-400">
          {fakeFriend.online ? "Active now" : "Offline"}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-end gap-2">
      {#each listOptions as { title, icon }}
        <button class="rounded-full w-10 h-10 bg-gray-100">
          <Icon {icon} class="h-6 w-6 m-auto" />
        </button>
      {/each}
    </div>
  </div>

  <ChatFeed />
</div>
