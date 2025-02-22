import type { ToastStatusType } from "$lib/types/stores-type";
import { showToast, toastMsg, toastStatus } from "./store";
import { v6 as uuidv6 } from "uuid";

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

export function handleFileChange(event: any) {
  const selectedFile = event.target.files[0];
  console.log({ selectedFile });
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e?.target?.result;
      console.log(fileData); // Process the file data here
    };
    reader.readAsText(selectedFile); // For text files, or readAsDataURL/readAsArrayBuffer for other types
  }
}

export function generateChatRoomId() {
  return uuidv6();
}

export function onCopyText(text: string) {
  if (!navigator.clipboard) {
    console.error("Clipboard API not supported");
    return;
  }
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
}

export function shortText(text: string, characterNum: number) {
  return text.length < characterNum - 1
    ? text
    : text.slice(0, characterNum) +
        "..." +
        text.slice(text.length - characterNum, text.length);
}
