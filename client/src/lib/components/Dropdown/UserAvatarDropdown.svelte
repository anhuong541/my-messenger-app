<script>
  import Icon from "@iconify/svelte";
  import { Dropdown, DropdownItem } from "flowbite-svelte";

  import { signOut } from "$lib/utils/databaseAction";
  import { userInfo } from "$lib/utils/dataStore";

  const dropdownOption = [
    {
      label: "Profile",
      icon: "material-symbols:person-outline-rounded",
      handler: () => {},
    },
    {
      label: "Sign Out",
      icon: "material-symbols:logout-rounded",
      handler: signOut,
    },
  ];
</script>

<slot />
<Dropdown classContainer="-translate-x-6 translate-y-2">
  <p class="px-4 py-2">
    {$userInfo?.username ?? "Loading User..."}
  </p>
  {#each dropdownOption as { label, icon, handler }}
    <DropdownItem on:click={handler}>
      <div class="flex item-center gap-2">
        <Icon {icon} class="w-6 h-6" />
        <p>{label}</p>
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
