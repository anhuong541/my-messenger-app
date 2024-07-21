<script lang="ts">
  import { showToast, toastMsg, toastStatus } from "$lib/utils/store";
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

{#if $showToast}
  <Toast color={toastColor} dismissable={false} position="top-right">
    <svelte:fragment slot="icon">
      {#if $toastStatus === "success"}
        <CheckOutline />
      {:else if $toastStatus === "error"}
        <CloseOutline />
      {:else if $toastStatus === "warning"}
        <ExclamationCircleOutline />
      {:else}
        <BanOutline />
      {/if}
    </svelte:fragment>
    {$toastMsg}
  </Toast>
{/if}
