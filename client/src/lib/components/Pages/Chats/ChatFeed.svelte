<script lang="ts">
  import defaultAvatar from "$lib/assets/default-avatar.webp";

  import dayjs from "dayjs";
  import Icon from "@iconify/svelte";
  import { Input } from "flowbite-svelte";
  import { doc, setDoc } from "firebase/firestore";
  import { collectionStore } from "sveltefire";

  import { firestore } from "$lib/utils/firebase";
  import { onTypeMessageChat, selectedChatroomId } from "$lib/utils/store";
  import { userInfo } from "$lib/utils/dataStore";
  import Button from "$lib/components/Widget/Button.svelte";

  let message = "";
  let fetchMessageFromChatRoom;

  $: {
    if ($selectedChatroomId) {
      if ($onTypeMessageChat === "personal") {
        fetchMessageFromChatRoom = collectionStore(
          firestore,
          `chat_rooms/${$selectedChatroomId}/messages`
        );
      } else if ($onTypeMessageChat === "groups") {
        fetchMessageFromChatRoom = collectionStore(
          firestore,
          `chat_groups/${$selectedChatroomId}/messages`
        );
      }
    }
  }

  const handlerFilterMessages = (messagesInput: any) => {
    return messagesInput.sort((a: any, b: any) => b?.id - a?.id);
  };

  $: messages = (($fetchMessageFromChatRoom && $fetchMessageFromChatRoom) ??
    []) as any;

  $: messageEventsSize = messages?.length ?? 0;

  const onUserSendMessage = async () => {
    if ($selectedChatroomId && $userInfo && message !== "") {
      await setDoc(
        doc(
          firestore,
          `${$onTypeMessageChat === "personal" ? "chat_rooms" : "chat_groups"}/${$selectedChatroomId}/messages/${messageEventsSize}`
        ),
        {
          userId: $userInfo.uid,
          name: $userInfo.username,
          avatar: defaultAvatar,
          message,
          createAt: Date.now(),
          emojis: [],
        }
      );
      message = "";
    }
  };
</script>

<div class="flex flex-col justify-between h-full py-2">
  <!-- chat feed -->
  <div class="h-full overflow-hidden">
    <div
      class="flex-grow flex-col-reverse h-[78vh] flex gap-2 overflow-y-auto px-4 py-2"
    >
      {#if $selectedChatroomId !== "" && $fetchMessageFromChatRoom}
        {#if messages.length === 0}
          <div class="h-full">
            <p class="font-medium">Message something...</p>
          </div>
        {:else}
          {#each handlerFilterMessages(messages) ?? [] as item, index}
            {#if $userInfo.uid !== item?.userId}
              <div class="flex justify-start items-end gap-4 sm:pr-20 pr-16">
                {#if index === messageEventsSize + 1 || item?.userId !== messages[index - 1]?.userId}
                  <img
                    src={item?.avatar ?? defaultAvatar}
                    alt=""
                    class="w-12 h-12 rounded-full"
                  />
                {:else}
                  <div class="w-12 h-12 flex-shrink-0" />
                {/if}
                <div
                  class="flex flex-col gap-2 bg-primaryColor-200 rounded-xl px-4 py-2"
                >
                  <p>{item.name}</p>
                  <p>{item?.message}</p>
                  <div class="flex justify-between text-xs">
                    <!-- <Emojis emojis={message.emojis} /> -->
                    <p class="text-gray-600">
                      {dayjs(item?.createAt).format("HH:mm")}
                    </p>
                  </div>
                </div>
              </div>
            {:else}
              <div class="flex justify-end items-end gap-4 sm:pl-20 pl-16">
                <div
                  class="flex flex-col gap-2 bg-primaryColor-600 text-white rounded-xl px-4 py-2"
                >
                  <p>{item.name}</p>
                  <p>{item?.message}</p>
                  <div class="flex justify-between text-xs">
                    <p class="text-gray-100">
                      {dayjs(item?.createAt).format("HH:mm")}
                    </p>
                  </div>
                </div>
                {#if index === messageEventsSize + 1 || item?.userId !== messages[index - 1]?.userId}
                  <img
                    src={item?.avatar ?? defaultAvatar}
                    alt=""
                    class="w-12 h-12 rounded-full"
                  />
                {:else}
                  <div class="w-12 h-12 flex-shrink-0" />
                {/if}
              </div>
            {/if}
          {/each}
        {/if}
      {:else}
        no chat ....
      {/if}
    </div>
  </div>

  <!-- send message -->
  <form
    on:submit|preventDefault={onUserSendMessage}
    class="flex items-center gap-2 px-2"
  >
    <Input
      type="text"
      placeholder="Aa"
      class="border py-3 px-4 rounded-xl w-full"
      bind:value={message}
    />
    <Button
      className="!w-[140px]"
      type="submit"
      disabled={$selectedChatroomId ? false : true}
    >
      Send
      <Icon icon="material-symbols:send-outline-rounded" class="h-6 w-6 " />
    </Button>
  </form>
</div>

<style></style>
