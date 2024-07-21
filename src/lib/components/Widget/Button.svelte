<script lang="ts">
  import Icon from "@iconify/svelte";
  import classNames from "classnames";

  export let variant:
    | "primary"
    | "secondary"
    | "premium"
    | "recap"
    | "tertiary"
    | "no-outlined"
    | "underlined"
    | "delete"
    | "disabled"
    | "Twitter"
    | "Telegram"
    | "" = "primary";
  export let className: string = "";
  export let disabled: boolean = false;
  export let isLoading: boolean = false;
  export let size: "supper-small" | "small" | "medium" | "large" = "small";
  export let type: "button" | "submit" | "reset" = "button";

  $: buttonClassName = classNames(className, "button", "btn-container", {
    ["disabled"]: disabled || variant === "disabled",
    ["underlined"]: variant === "underlined",
    ["secondary"]: variant === "secondary",
    ["tertiary"]: variant === "tertiary",
    ["delete"]: variant === "delete",
    ["large"]: size === "large",
    ["small"]: size === "small",
    ["supper-small"]: size === "supper-small",
    ["loading"]: isLoading,
  });
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {type}
  class={buttonClassName}
  disabled={disabled || isLoading}
>
  {#if isLoading}
    <Icon
      icon="icomoon-free:spinner2"
      class={`animate-spin ${variant === "secondary" ? "text_27326F" : "text-white"}`}
    />
  {:else}
    {#if variant === "premium"}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6629 3.5843C14.7217 3.57771 14.7811 3.58901 14.8339 3.61685C14.8867 3.64495 14.9305 3.68852 14.9599 3.74223C14.9893 3.79594 15.0031 3.85745 14.9994 3.91919L14.4836 12.7921H1.51642L1.00059 3.91919C0.996892 3.85745 1.01055 3.79592 1.0399 3.74216C1.06924 3.68841 1.11299 3.64476 1.16578 3.6166C1.21856 3.58843 1.27808 3.57697 1.33702 3.58362C1.39596 3.59026 1.45175 3.61473 1.49755 3.65401L4.60499 6.30708L7.76082 2.11502C7.79036 2.07895 7.82704 2.04999 7.86833 2.03014C7.90962 2.01028 7.95455 2 8.00001 2C8.04548 2 8.0904 2.01028 8.1317 2.03014C8.17299 2.04999 8.20967 2.07895 8.23921 2.11502L11.395 6.30708L14.5025 3.65401C14.5484 3.61511 14.6041 3.5909 14.6629 3.5843ZM1.55334 13.4273L1.55781 13.5041C1.577 13.827 1.71333 14.1301 1.93906 14.3518C2.1648 14.5735 2.46298 14.6971 2.77297 14.6976H13.2271C13.537 14.6971 13.8352 14.5735 14.061 14.3518C14.2867 14.1301 14.423 13.827 14.4422 13.5041L14.4467 13.4273H1.55334Z"
          fill={`${disabled ? "#9ca3af" : "#fff"}`}
        />
      </svg>
    {/if}
    <slot />
  {/if}
</button>

<style>
  .button {
    width: 100%;
    padding: 8px 16px 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    border-radius: 0.75rem; /* 12px */
    padding: 10px 16px;
    gap: 4px;
    cursor: pointer;
  }

  .button[type="submit"],
  .button[type="button"] {
    background: #007070;
  }

  .secondary {
    color: #007070;
    border: 1px solid #007070;
  }
  .secondary[type="submit"],
  .secondary[type="button"] {
    background: #fff;
  }

  .tertiary[type="submit"],
  .tertiary[type="button"] {
    color: #fff;
    background: #33a3a3;
    border: 1px solid #33a3a3;
  }

  .delete {
    color: #fff;
    border: none;
  }
  .delete[type="submit"],
  .delete[type="button"] {
    background: red;
  }
</style>
