<script>
  import Icon from "@iconify/svelte";
  import fakeProfile from "$lib/assets/profile.jpg";

  const fakeListFriends = [{}, {}, {}, {}, {}, {}, {}];
</script>

<div class="col-span-3 flex flex-col gap-4 pt-4 pb-2 h-full overflow-hidden">
  <!-- serch bar -->
  <label for="searchFriend" class="relative flex px-4 searchIco">
    <input
      type="text"
      id="searchFriend"
      placeholder="Search"
      class="p-3 pr-5 pl-10 rounded-md text-sm w-full"
    />
    <Icon
      icon="ion:search"
      class="absolute left-8 top-[50%] -translate-y-1/2"
    />
  </label>

  <div class="flex flex-col gap-2 px-4 overflow-auto">
    {#each fakeListFriends as friend}
      <div class="flex gap-4 hover:bg-primaryColor-200 p-2 rounded-md">
        <img src={fakeProfile} alt="" class="w-16 h-16 rounded-md" />
        <div class="flex flex-col justify-between gap-1 py-1 w-full">
          <span class="flex justify-between items-center pr-2">
            <h4 class="font-medium text-lg">Name Somebody</h4>
            <p class="text-gray-400">4m</p>
          </span>
          <p class="text-gray-400">The lasted message...</p>
        </div>

        <!-- add Pin icon later -->
      </div>
    {/each}
  </div>
</div>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #99d0d0;
    width: 5px;
  }
</style>
