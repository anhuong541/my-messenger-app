import type { ToastStatusType } from "$lib/types/stores-type";
import { showToast, toastMsg, toastStatus } from "./store";

let toastTimeout = 2000;

export const showOverlayAnimationVariants = {
  visible: { opacity: 1, y: 0, display: "block" },
  hidden: { opacity: 0, y: -10, display: "none" },
};

export const wait = async (timeout: number) =>
  new Promise((e) => setTimeout(e, timeout));

export const triggerToast = async (msg: string, status: ToastStatusType) => {
  toastMsg.set(msg);
  toastStatus.set(status);
  showToast.set(true);
  await wait(toastTimeout);
  showToast.set(false);
};
