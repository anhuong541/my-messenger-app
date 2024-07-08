import { writable } from "svelte/store";

export const isLogin = writable(false);
export const userAccessState = writable("login");
