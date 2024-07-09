<script>
  import Icon from "@iconify/svelte";

  const fakeFilesList = [{}, {}, {}, {}];
</script>

<div class="col-span-2 flex flex-col gap-6">
  <div class="flex flex-col gap-4 bg-gray-100 rounded-3xl py-4 h-[500px]">
    <div class="px-6">
      <h3 class="font-medium text-xl">Info</h3>
    </div>
    <div class="flex flex-col gap-4 px-4">
      <h4 class="font-medium px-2">Files</h4>
      <div class="flex flex-col gap-4">
        {#each fakeFilesList as item}
          <div
            class="flex flex-col gap-2 p-2 rounded-md cursor-pointer hover:bg-primaryColor-200"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <Icon icon="f7:photo-on-rectangle" class="w-6 h-6" />
                <p>12 Photos</p>
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
