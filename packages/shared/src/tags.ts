/**
 * Mỗi loại bí mật ứng với một tag TideCloak.
 * Role cần có trong realm:
 *   _tide_<tag>.selfencrypt  và  _tide_<tag>.selfdecrypt
 */
export const SECRET_TYPES = ["note", "recovery", "sensitive"] as const;
export type SecretType = (typeof SECRET_TYPES)[number];

export const TAG_BY_TYPE: Record<SecretType, string> = {
  note: "note",
  recovery: "recovery",
  sensitive: "sensitive",
};

export const decryptRoleFor = (type: SecretType) => `_tide_${TAG_BY_TYPE[type]}.selfdecrypt`;
export const encryptRoleFor = (type: SecretType) => `_tide_${TAG_BY_TYPE[type]}.selfencrypt`;