<script lang="ts">
  import { Input, Modal } from "flowbite-svelte";
  import Button from "../Widget/Button.svelte";
  import Icon from "@iconify/svelte";
  import { auth, firestore, user } from "$lib/utils/firebase";
  import { collectionStore } from "sveltefire";
  import { onMount } from "svelte";
  import { collection, doc, setDoc } from "firebase/firestore";

  export let openModal = true;

  let uidTyped: string = "";
  let isSearching = false;
  let collectionUser: any;
  let listFriendRequestSended = [];

  const sendFriendRequest = async () => {
    const userData =
      $collectionUser &&
      $collectionUser.find((item: any) => item?.uid === $user?.uid);

    const userRequestRef = collection(
      firestore,
      "users",
      userFilterd?.uid,
      "friends_request"
    );

    await setDoc(doc(userRequestRef, $user?.uid), {
      uid: userData?.uid,
      email: userData?.email,
      username: userData?.username,
      gender: userData?.gender,
    });
  };

  $: userFilterd =
    $collectionUser &&
    $collectionUser.find((item: any) => item?.uid === uidTyped);

  $: isUser = $user?.uid === userFilterd?.uid ?? false;

  onMount(() => {
    // take user data
    isSearching = true;
    collectionUser = collectionStore(firestore, "users");
    isSearching = false;
  });
</script>

<Modal title="New Contact" bind:open={openModal}>
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
      bind:value={uidTyped}
      class="border py-3 px-6 pl-12 rounded-xl w-full"
    />
  </label>

  {#if userFilterd}
    <div class="flex flex-col gap-2 border p-2 rounded-xl">
      <p>Uid: {userFilterd?.id}</p>
      <p>Username: {userFilterd?.username}</p>
      <p>Email: {userFilterd?.email}</p>
      <p>Gender: {userFilterd?.gender}</p>
    </div>
  {:else}
    <p class="text-red-500">User ID not found or not provided</p>
  {/if}

  <div class="flex justify-end items-center gap-4">
    {#if userFilterd}
      <Button
        className="!w-[140px]"
        on:click={sendFriendRequest}
        isLoading={isSearching}
        disabled={isUser}
      >
        {isUser ? "It's you" : "Add Friend"}
      </Button>
    {/if}
  </div>
</Modal>
