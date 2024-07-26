<script lang="ts">
  import profile from "$lib/assets/default-avatar.webp";

  import { Avatar, Tooltip } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  import { UserAvatarDropdown } from "../Dropdown";
  import { user } from "$lib/utils/firebase";
  import { onCopyText, shortText } from "$lib/utils";

  let isNotification = false;
  let isCopied = false;
</script>

<!-- header -->
<header class="border-b flex justify-between items-center px-4 w-full h-[8vh]">
  <nav class="flex">
    <ul class="flex items-center gap-8 text-lg font-medium">
      <!-- <li><Icon icon="material-symbols:menu-rounded" class="w-12 h-12" /></li> -->
      <li><h1 class="font-semibold text-2xl">💬 Svelte Messsenger</h1></li>
      <!-- <li>Service</li> -->
    </ul>
  </nav>
  <div class="flex items-center justify-end gap-4">
    <button
      class="flex items-center gap-1 px-4 rounded-full min-w-10 h-10 bg-primaryColor-100 text-sm"
      on:click={() => {
        onCopyText($user?.uid ?? "");
        isCopied = true;
        setTimeout(() => {
          isCopied = false;
        }, 4000);
      }}
    >
      {shortText($user?.uid ?? "", 8)}
      <Icon
        icon={isCopied
          ? "material-symbols:check-rounded"
          : "material-symbols:content-copy-outline-rounded"}
        class="w-5 h-5 m-auto"
      />
    </button>
    <Tooltip>UID: {$user?.uid}</Tooltip>
    <button class="rounded-full w-10 h-10 bg-primaryColor-100 relative">
      <Icon
        icon="material-symbols:notifications-outline"
        class="w-7 h-7 m-auto"
      />
      {#if isNotification}
        <div
          class="absolute left-[90%] bottom-[80%] -translate-x-1/2 translate-y-1/2 rounded-full w-3 h-3 text-center bg-red-500"
        />
      {/if}
    </button>
    <UserAvatarDropdown>
      <Avatar src={profile} class="h-12 w-12 m-auto cursor-pointer" />
    </UserAvatarDropdown>
  </div>
</header>
