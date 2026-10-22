import type { SecretType } from "./tags";

/** Phần nằm TRONG ciphertext (server không bao giờ thấy). */
export interface SecretPayload {
  title: string;
  body: string;
}

/** Bản ghi như lưu trong DB / trả qua API. */
export interface SecretRecord {
  id: string;
  type: SecretType;
  tags: string[];
  ciphertext: string;
  createdAt: string;
  updatedAt: string;
}

export interface SecretInput {
  type: SecretType;
  tags: string[];
  ciphertext: string;
}