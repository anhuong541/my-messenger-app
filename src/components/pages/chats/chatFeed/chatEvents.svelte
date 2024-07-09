<script lang="ts">
  import dayjs from "dayjs";
  import lukaModric from "$lib/assets/luka-modric-avatar.jpg";
  import user from "$lib/assets/profile.jpg";
  import Emojis from "../../../Emojis.svelte";

  const fakeUserId = 541;

  const fakeChatMessageEvents = [
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Hi Nice to Meet you again",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "Another one!!!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 541,
      name: "Huong Nguyen",
      avatar: user,
      message: "Nice to meet you too!",
      createAt: 1720516307,
      emojis: [],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message: "How is your day, bro!!!",
      createAt: 1720516307,
      emojis: [
        { type: "like", count: 1, userReact: false },
        { type: "heart", count: 2, userReact: false },
        { type: "wow", count: 4, userReact: true },
      ],
    },
    {
      userId: 123,
      name: "Luka Modric",
      avatar: lukaModric,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
      createAt: 1720516307,
      emojis: [],
    },
  ];

  const messageEventsSize = fakeChatMessageEvents.length;
</script>

<div class="h-full overflow-hidden">
  <div class="flex-grow h-[80vh] flex flex-col gap-2 overflow-y-auto">
    {#each fakeChatMessageEvents as message, index}
      {#if fakeUserId !== message.userId}
        <div class="flex justify-start items-end gap-4 sm:pr-20 pr-16">
          {#if index === messageEventsSize - 1 || message.userId !== fakeChatMessageEvents[index + 1].userId}
            <img
              src={message.avatar}
              alt=""
              class="sm:w-16 sm:h-16 w-12 h-12 rounded-md"
            />
          {:else}
            <div class="sm:w-16 sm:h-16 w-12 h-12 flex-shrink-0" />
          {/if}
          <div
            class="flex flex-col gap-2 bg-primaryColor-200 rounded-md px-4 py-2"
          >
            <h5 class="font-medium">{message.name}</h5>
            <p>{message.message}</p>
            <div class="flex justify-between text-xs">
              <Emojis emojis={message.emojis} />
              <p>{dayjs(message.createAt * 1000).format("HH:mm")}</p>
            </div>
          </div>
        </div>
      {:else}
        <div class="flex justify-end items-end gap-4 sm:pl-20 pl-16">
          <div
            class="flex flex-col gap-2 bg-primaryColor-600 text-white rounded-md px-4 py-2"
          >
            <h5 class="font-medium">{message.name}</h5>
            <p>{message.message}</p>
            <div class="flex justify-between text-xs">
              <Emojis emojis={message.emojis} />
              <p>{dayjs(message.createAt * 1000).format("HH:mm")}</p>
            </div>
          </div>
          {#if index === messageEventsSize - 1 || message.userId !== fakeChatMessageEvents[index + 1].userId}
            <img
              src={message.avatar}
              alt=""
              class="sm:w-16 sm:h-16 w-12 h-12 rounded-md"
            />
          {:else}
            <div class="sm:w-16 sm:h-16 w-12 h-12 flex-shrink-0" />
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style></style>
