import { writable } from "svelte/store";

type UserInfoType = {
  id: string;
  uid: string;
  username: string;
  date: number;
  gender: string;
  online: boolean;
  email: string;
};

const initialUserInfo = {
  id: "",
  uid: "",
  username: "",
  date: 0,
  gender: "",
  online: false,
  email: "",
};

export const usersList = writable([]);
export const userInfo = writable<UserInfoType>(initialUserInfo);
export const friendSelected = writable<any>();
