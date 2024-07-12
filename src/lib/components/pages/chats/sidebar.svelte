<script lang="ts">
  import Icon from "@iconify/svelte";
  import fakeProfile from "$lib/assets/luka-modric-avatar.jpg";
  import { tabMobileView } from "../../../../store";
  import OverlayPopup from "$lib/components/OverlayPopup.svelte";

  export let colSpan = "";
  export let friends = [] as any;
  export let friendSelect = {};

  let popUpSearchingFriend: boolean = false;
</script>

<div
  class={`${colSpan} flex flex-col gap-4 pt-8 pb-2 h-full w-full overflow-hidden`}
>
  <div class="px-4">
    <button
      on:click={() => (popUpSearchingFriend = !popUpSearchingFriend)}
      class="w-full flex gap-2 justify-center items-center border rounded-md px-4 py-2 bg-primaryColor-500 active:bg-primaryColor-300 hover:bg-primaryColor-400 text-white"
    >
      <Icon icon="ion:search" />
      Search your friend
    </button>
  </div>

  <div
    class="flex flex-col gap-2 px-4 h-[90vh] overflow-y-auto overflow-x-hidden"
  >
    {#each friends as friend}
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div
        class="flex gap-4 hover:bg-primaryColor-200 p-2 rounded-md cursor-pointer"
        on:click={() => {
          tabMobileView.set("chatfeed");
          friendSelect = friend;
        }}
      >
        <img src={fakeProfile} alt="" class="w-16 h-16 rounded-md" />
        <div class="flex flex-col justify-between gap-1 py-1 w-full">
          <span class="flex justify-between items-center pr-2">
            <h4 class="font-medium xl:text-lg text-base">Name Somebody</h4>
            <p class="text-gray-400 xl:text-base text-sm">4m</p>
          </span>
          <p
            class="text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            The lasted message...
          </p>
        </div>

        <!-- add Pin icon later -->
      </div>
    {/each}
  </div>
</div>

<OverlayPopup isOpen={popUpSearchingFriend} clickOutSideToClose>
  <div>
    <h2>Add new Friend</h2>

    <form action="">
      <label for="">
        <input type="text" placeholder="Type your friend name" />
      </label>
    </form>
  </div>
</OverlayPopup>

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
