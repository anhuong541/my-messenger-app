import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { isLoading, loginState } from "./store";
import type { LoginStateType } from "$lib/types/stores-type";

export const onSubmitUserAction = async (email: string, password: string) => {
  if (email !== "" && password !== "") {
    isLoading.set(true);
    let onPageSignin: LoginStateType = "signin";
    loginState.subscribe((value) => (onPageSignin = value));
    if (onPageSignin === "signin") {
      await signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log("login error: ", error)
      );
    } else {
      await createUserWithEmailAndPassword(auth, email, password).catch(
        (error) => console.log("sign up error: ", error)
      );
    }
    isLoading.set(false);
  }
};

export const signOut = async () => {
  await auth.signOut();
};
