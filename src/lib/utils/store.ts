import type { ToastStatusType, LoginStateType } from "$lib/types/stores-type";
import { writable } from "svelte/store";

export const loginState = writable<LoginStateType>("signin");
export const isLoading = writable(false);
export const showToast = writable(true);
export const toastMsg = writable("");
export const toastStatus = writable<ToastStatusType>("success");
