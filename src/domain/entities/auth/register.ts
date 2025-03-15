import { User } from "./login";


export interface Register {
  ok: string;
  token: string;
  participant: User;
  message: string;
}
