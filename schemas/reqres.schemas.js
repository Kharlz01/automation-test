export const userSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    email: { type: "string", format: "email" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    avatar: { type: "string", format: "uri" }
  },
  required: ["id", "email", "first_name", "last_name"]
};

export const authResponseSchema = {
  type: "object",
  properties: {
    token: { type: "string" }
  },
  required: ["token"]
};