import { atom } from "recoil";

export const userNameState = atom({
  key: "userName",
  default: "",
});

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const userId = atom({
  key: "userId",
  default: -1,
});
