import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { goto } from "$app/navigation";

// place files you want to import through the `$lib` alias in this folder.
export const signOutFirebase = () => {
  signOut(auth);
  goto("/");
};

export const showOverlayAnimationVariants = {
  visible: { opacity: 1, y: 0, display: "block" },
  hidden: { opacity: 0, y: -10, display: "none" },
};
