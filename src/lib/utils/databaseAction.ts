import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { isLoading, loginState } from "./store";
import type { LoginStateType } from "$lib/types/stores-type";
import { triggerToast } from ".";
import { goto } from "$app/navigation";

export const onSubmitUserAction = async (email: string, password: string) => {
  if (email !== "" && password !== "") {
    let userResponse = null;
    isLoading.set(true);
    let onPageSignin: LoginStateType = "signin";
    let onError = false;
    loginState.subscribe((value) => (onPageSignin = value));
    if (onPageSignin === "signin") {
      userResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((error) => {
        console.log("login error: ", error);
        onError = true;
        triggerToast(
          "Something went wrong during login. Please check your password and try again",
          "error"
        );
      });
    } else {
      userResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((error) => {
        console.log("sign up error: ", error);
        onError = true;
        triggerToast(
          "Something went wrong during register. Please check your email and try again",
          "error"
        );
      });
    }
    if (!onError) {
      goto("/chat");
    }
    isLoading.set(false);
    return userResponse;
  } else {
    triggerToast("Please your email or password", "warning");
  }
};

export const signOut = async () => {
  await auth.signOut();
  goto("/");
};
