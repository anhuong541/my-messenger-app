<script>
  import profile from "$lib/assets/default-avatar.webp";

  import { Avatar } from "flowbite-svelte";
  import Icon from "@iconify/svelte";

  import { userInfo } from "$lib/utils/dataStore";
  import UserAvatarDropdown from "../Dropdown/UserAvatarDropdown.svelte";
</script>

<!-- header -->
<header class="border-b flex justify-between items-center px-4 w-full h-[8vh]">
  <nav class="flex">
    <ul class="flex items-center gap-8 text-lg font-medium">
      <!-- <li><Icon icon="material-symbols:menu-rounded" class="w-12 h-12" /></li> -->
      <li><h1 class="font-semibold text-2xl">Chat Application</h1></li>
      <!-- <li>Service</li> -->
    </ul>
  </nav>
  <div class="flex items-center justify-end gap-4">
    <div
      class="flex items-center bg-primaryColor-500 text-white h-12 rounded-full overflow-hidden"
    >
      <p class="m-auto pl-4 pr-2">
        {$userInfo?.username ?? "Loading User..."}
        <!-- xem collection để đọc username -->
      </p>
      <UserAvatarDropdown>
        <Avatar src={profile} class="h-12 w-12 m-auto cursor-pointer" />
      </UserAvatarDropdown>
    </div>
  </div>
</header>
