import { writable } from "svelte/store";

export const isLogin = writable(false);
export const userAccessState = writable("login");
export const tabMobileView = writable("sidebar");
export const viewResponsive = writable("");
