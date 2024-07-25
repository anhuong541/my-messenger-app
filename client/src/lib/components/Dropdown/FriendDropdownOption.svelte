<script>
  import Icon from "@iconify/svelte";
  import { Dropdown, DropdownItem } from "flowbite-svelte";

  export let showDropdown = false;

  const dropdownOption = [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
    },
    {
      label: "Delete",
      icon: "material-symbols:delete-outline-rounded",
    },
    {
      label: "Block User",
      icon: "material-symbols:block",
    },
  ];
</script>

{#if showDropdown}
  <button
    class="absolute right-4 top-[50%] -translate-y-1/2 z-10 rounded-full w-10 h-10 bg-gray-100"
  >
    <Icon icon="material-symbols:more-horiz" class="h-6 w-6 m-auto" />
  </button>
  <Dropdown classContainer="w-[140px]">
    {#each dropdownOption as { label, icon }}
      <DropdownItem>
        <div class="flex item-center gap-2">
          <Icon {icon} class="w-6 h-6" />
          {label}
        </div>
      </DropdownItem>
    {/each}
  </Dropdown>
{/if}
