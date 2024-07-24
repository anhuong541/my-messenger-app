import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore, user } from "./firebase";
import { isLoading, loginState } from "./store";
import type { LoginStateType } from "$lib/types/stores-type";
import { triggerToast } from ".";
import { goto } from "$app/navigation";
import { doc, setDoc, updateDoc } from "firebase/firestore";

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

      await updateUserOnlineState(userResponse?.user?.uid ?? "", true);
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
    return userResponse ?? null;
  } else {
    triggerToast("Please your email or password", "warning");
  }
};

export const setFirebaseDocumentAction = async (
  dataInput: any,
  location: string
) => {
  await setDoc(doc(firestore, location), dataInput);
};

export const updateUserOnlineState = async (uid: string, state: boolean) => {
  const userRef = doc(firestore, `/users/${uid}`);
  await updateDoc(userRef, {
    online: state,
  });
};

export const signOut = async () => {
  let userUid;
  user.subscribe((e) => (userUid = e?.uid));
  await updateUserOnlineState(userUid ?? "", false);
  await auth.signOut();
  goto("/");
};
