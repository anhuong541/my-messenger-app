<script>
  import Icon from "@iconify/svelte";
  import fakeProfile from "$lib/assets/luka-modric-avatar.jpg";
  import { tabMobileView } from "../../../../store";
  import { Collection } from "sveltefire";
  import { user } from "$lib/utils/firebase";
  export let colSpan = "";

  const fakeListFriends = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
</script>

<div
  class={`${colSpan} flex flex-col gap-4 pt-4 pb-2 h-full w-full overflow-hidden`}
>
  <Collection
    ref={`/users/${$user?.uid}/messages`}
    let:ref={chatsRef}
    let:data={messages}
  >
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
    <!-- 
    <button on:click={() => console.log("messages: ", messages)}>
      on click
    </button> -->

    <div
      class="flex flex-col gap-2 px-4 h-[90vh] overflow-y-auto overflow-x-hidden"
    >
      {#each fakeListFriends ?? [] as friend}
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
        <div
          class="flex gap-4 hover:bg-primaryColor-200 p-2 rounded-md cursor-pointer"
          on:click={() => tabMobileView.set("chatfeed")}
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
  </Collection>
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
