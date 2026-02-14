import { v4 as uuidv4 } from "uuid";
import { hash } from "../utils/crypto";

export const createIdentity = (name: string) => {
  const id = uuidv4();
  const publicKey = hash(name + id);

  return {
    id,
    name,
    publicKey,
    createdAt: new Date()
  };
};
