<script lang="ts">
  import { showToast, toastMsg, toastStatus } from "$lib/utils/store";
  import { slide } from "svelte/transition";
  import {
    BanOutline,
    CheckOutline,
    CloseOutline,
    ExclamationCircleOutline,
  } from "flowbite-svelte-icons";
  import type { ColorVariant } from "flowbite-svelte";
  import { Toast } from "flowbite-svelte";

  $: toastColor = (
    $toastStatus === "success"
      ? "green"
      : $toastStatus === "error"
        ? "red"
        : $toastStatus === "warning"
          ? "yellow"
          : "dark"
  ) as ColorVariant;
</script>

<Toast
  color={toastColor}
  position="top-right"
  transition={slide}
  bind:toastStatus={$showToast}
>
  <div class="flex items-center gap-2">
    <div
      color={toastColor}
      class={`flex flex-shrink-0 justify-center items-center p-1 w-8 h-8 rounded-lg bg-${toastColor}-100 text-${toastColor}-500`}
    >
      {#if $toastStatus === "success"}
        <CheckOutline />
      {:else if $toastStatus === "error"}
        <CloseOutline />
      {:else if $toastStatus === "warning"}
        <ExclamationCircleOutline />
      {:else}
        <BanOutline />
      {/if}
    </div>

    {$toastMsg}
  </div>
</Toast>
