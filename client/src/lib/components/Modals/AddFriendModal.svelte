<script lang="ts">
  import { Input, Modal } from "flowbite-svelte";
  import { collection, doc, setDoc } from "firebase/firestore";
  import Icon from "@iconify/svelte";

  import Button from "../Widget/Button.svelte";
  import { firestore, user } from "$lib/utils/firebase";

  export let openModal = false;
  export let usersData;
  export let friendsList;

  let uidTyped: string = "";
  let memoryUid: string = "";
  let friendsRequestSented: boolean = false;

  const sendFriendRequest = async () => {
    const userData = usersData.find((item: any) => item?.uid === $user?.uid);

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

    friendsRequestSented = true;
    memoryUid = uidTyped;
  };

  $: {
    if (uidTyped !== memoryUid && friendsRequestSented) {
      friendsRequestSented = false;
    }
  }

  $: userFilterd = usersData.find((item: any) => item?.uid === uidTyped);
  $: isUser = $user?.uid === userFilterd?.uid ?? false;
  $: isFriends = friendsList.map((item: any) => item?.uid).includes(uidTyped);
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
        on:click={sendFriendRequest}
        disabled={isUser || isFriends || friendsRequestSented}
      >
        {isUser
          ? "It's you"
          : isFriends
            ? "Your Friend"
            : friendsRequestSented
              ? "Friend Request Sented"
              : "Add Friend"}
      </Button>
    {/if}
  </div>
</Modal>
