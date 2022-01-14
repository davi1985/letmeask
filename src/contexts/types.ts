export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthContextData = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};
