<script lang="ts">
  import { Input, Modal } from "flowbite-svelte";
  import Button from "../Widget/Button.svelte";
  import Icon from "@iconify/svelte";
  import { firestore } from "$lib/utils/firebase";
  import { collectionStore } from "sveltefire";
  import { collection, getDocs } from "firebase/firestore";

  export let openModal = false;

  let uidTyped = "";
  let isSearching = false;

  const handleSearchUid = async () => {
    isSearching = true;
    let collectionUsers = await getDocs(collection(firestore, "users"));
    console.log({ colUsers: collectionUsers });

    isSearching = false;
  };
</script>

<Modal title="New Contact" bind:open={openModal} autoclose>
  <label for="search-friends" class="relative">
    <Icon
      icon="material-symbols:search-rounded"
      class="absolute top-[50%] left-4 -translate-y-1/2 w-6 h-6"
    />
    <Input
      type="text"
      id="search"
      name="search"
      placeholder="Type their uid"
      class="border py-3 px-6 pl-12 rounded-xl w-full"
    />
  </label>

  <div>Not found!</div>

  <Button on:click={handleSearchUid}>Search</Button>
</Modal>
