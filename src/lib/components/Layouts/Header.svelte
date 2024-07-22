<script>
  import { signOut } from "$lib/utils/databaseAction";
  import { Avatar } from "flowbite-svelte";

  import profile from "$lib/assets/default-avatar.webp";
  import Icon from "@iconify/svelte";
</script>

<!-- header -->
<header class="border-b flex justify-between items-center px-4 w-full h-[8vh]">
  <nav class="flex">
    <ul class="flex items-center gap-8 text-lg font-medium">
      <li><Icon icon="material-symbols:menu-rounded" class="w-12 h-12" /></li>
      <li>Home</li>
      <li>Service</li>
    </ul>
  </nav>
  <div class="flex items-center justify-end gap-4">
    <button class="flex rounded-full bg-gray-200 w-12 h-12">
      <Icon icon="mi:add" class="w-6 h-6 m-auto" />
    </button>
    <button class="flex rounded-full bg-gray-200 w-12 h-12" on:click={signOut}>
      <Icon icon="material-symbols:logout-rounded" class="w-6 h-6 m-auto" />
    </button>
    <Avatar src={profile} rounded class="h-12 w-12" />
  </div>
</header>
