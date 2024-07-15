<script>
  import Icon from "@iconify/svelte";
  import { tabMobileView } from "../../../../store";

  export let colSpan = "";

  const fakeFilesList = [
    { name: "Photos", icon: "f7:photo-on-rectangle", count: 12 },
    { name: "Videos", icon: "prime:video", count: 1 },
    { name: "Files", icon: "ph:files", count: 30 },
    { name: "links", icon: "ri:links-fill", count: 100 },
  ];
</script>

<div class={`${colSpan} lg:max-xl:hidden flex flex-col gap-6`}>
  <div class="flex flex-col gap-4 bg-gray-100 rounded-3xl py-4 h-[500px]">
    <div class="px-6 flex justify-between items-center">
      <h3 class="font-medium text-xl">Info</h3>
      <button on:click={() => tabMobileView.set("chatfeed")} class="lg:hidden">
        <Icon icon="akar-icons:cross" class="w-6 h-6" />
      </button>
    </div>
    <div class="flex flex-col gap-4 px-4">
      <h4 class="font-medium px-2">Files</h4>
      <div class="flex flex-col gap-2">
        {#each fakeFilesList as item}
          <div
            class="flex flex-col gap-2 px-2 py-4 rounded-md cursor-pointer hover:bg-primaryColor-200"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <Icon icon={item.icon} class="w-6 h-6" />
                <p>{item.count} {item.name}</p>
              </div>
              <div>
                <Icon icon="ep:arrow-down" />
                <!-- <Icon icon="ep:arrow-up" /> -->
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style></style>
