export const postSchema = {
  type: "object",
  properties: {
    userId: { type: "number" },
    id: { type: "number" },
    title: { type: "string", minLength: 1 },
    body: { type: "string", minLength: 1 }
  },
  required: ["userId", "id", "title", "body"],
  additionalProperties: false
};

export const commentSchema = {
  type: "object",
  properties: {
    postId: { type: "number" },
    id: { type: "number" },
    name: { type: "string" },
    email: { type: "string" },
    body: { type: "string" }
  },
  required: ["postId", "id", "name", "email", "body"]
};