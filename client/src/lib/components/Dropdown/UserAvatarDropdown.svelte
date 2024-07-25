<script>
  import { signOut } from "$lib/utils/databaseAction";
  import Icon from "@iconify/svelte";
  import { Dropdown, DropdownItem } from "flowbite-svelte";

  const dropdownOption = [
    {
      label: "Sign Out",
      icon: "material-symbols:logout-rounded",
      handler: signOut,
    },
  ];
</script>

<slot />
<Dropdown classContainer="-translate-x-6 translate-y-2">
  {#each dropdownOption as { label, icon, handler }}
    <DropdownItem on:click={handler}>
      <div class="flex item-center gap-2">
        <Icon {icon} class="w-6 h-6" />
        {label}
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
