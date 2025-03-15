export interface Login {
    ok: string;
    token: string;
    participant: User;
    message: string;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    uid: string;
    uidType: string;
    state: string;
  }
  