<script lang="ts">
  import defaultImg from "$lib/assets/default-avatar.webp";

  import { Avatar, Modal } from "flowbite-svelte";
  import Button from "../Widget/Button.svelte";
  import { firestore, user } from "$lib/utils/firebase";
  import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
  import { generateChatRoomId } from "$lib/utils";

  export let openModal = true;
  export let friendsRequestList;

  const onAcceptFriendRequest = async (selectedUid: string) => {
    if ($user) {
      const friendsRef = collection(firestore, "users", $user?.uid, "friends");
      const selectedUidFriendsRef = collection(
        firestore,
        "users",
        selectedUid,
        "friends"
      );
      const friendsRequestRef = collection(
        firestore,
        "users",
        $user?.uid,
        "friends_request"
      );
      const addNewChatRoomId = collection(firestore, "chat_rooms");
      const chatRoomId = generateChatRoomId();
      await setDoc(doc(friendsRef, selectedUid), {
        chatRoomId,
      });
      await setDoc(doc(selectedUidFriendsRef, $user?.uid), {
        chatRoomId,
      });
      await deleteDoc(doc(friendsRequestRef, selectedUid));
      await setDoc(doc(addNewChatRoomId, chatRoomId), {
        chatRoomId,
        userUid1: $user?.uid,
        userUid2: selectedUid,
        createAt: Date.now(),
      });
    }
  };

  const onDeleteFriendRequest = async (selectedUid: string) => {
    if ($user) {
      const friendsRequestRef = collection(
        firestore,
        "users",
        $user?.uid,
        "friends_request"
      );
      await deleteDoc(doc(friendsRequestRef, selectedUid));
    }
  };
</script>

<Modal title="Friend Requests" bind:open={openModal}>
  {#each friendsRequestList ?? [] as request}
    <div
      class="flex items-center gap-2 w-full px-2 py-3 hover:bg-gray-200 active:bg-gray-100 rounded-md cursor-pointer"
    >
      <Avatar src={defaultImg} class="h-12 w-12 rounded-full" />
      <div class="flex flex-col justify-center w-full overflow-hidden">
        <h4>{request.username}</h4>
        <p
          class="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {request.email}
        </p>
        <div class="flex items-center w-full gap-1 text-sm">
          <p class="text-green-500">
            {request.gender}
          </p>
        </div>
      </div>
      <Button
        className="!w-[100px]"
        on:click={async () => onAcceptFriendRequest(request.uid)}
      >
        Accept
      </Button>
      <Button
        className="!w-[100px]"
        on:click={async () => onDeleteFriendRequest(request.uid)}
      >
        Delete
      </Button>
    </div>
  {/each}
</Modal>
