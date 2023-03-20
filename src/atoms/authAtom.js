import { atom } from "jotai";
import { getToken } from "../utils/AuthUtils";

export const loginAtom = atom(getToken() ?? false);
