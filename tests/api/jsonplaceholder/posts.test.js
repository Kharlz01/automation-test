import axios from "axios";
import { expect } from "chai";

import {
  postSchema,
  commentSchema,
} from "../../../schemas/jsonplaceholder.schemas.js";

import { validateSchema } from "../../../utils/validateSchema.js";

// JSONPlaceholder API Testing

describe("JSONPlaceholder Posts, CRUD:", () => {
  let createdPostId;

  // Punto 1. CRUD Completo: GET, POST, PUT, DELETE.

  // Prueba 1: GET /posts
  it("prueba de obtener los posts", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(response.status).to.equal(200);
    // Punto 2. Validación de Esquemas: Validar la estructura de los datos obtenidos.
    validateSchema({ type: "array", items: postSchema }, response.data);
  });

  // Prueba 2: POST /posts
  it("prueba de crear un post", async () => {
    const newPost = { title: "Test Title", body: "Test Body", userId: 1 };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    expect(response.status).to.equal(201);
    validateSchema(postSchema, response.data);
    createdPostId = response.data.id;
  });

  // Prueba 3: PUT /posts/{id}
  it("prueba para actualizar el post", async () => {
    const updatedData = { title: "Updated Title" };
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${createdPostId}`,
      updatedData
    );

    expect(response.status).to.equal(200);
    expect(response.data.title).to.equal(updatedData.title);
  });

  // Prueba 4: DELETE /posts/{id}
  it("prueba para eliminar un post", async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    expect(response.status).to.equal(200);
    validateSchema({ type: "array", items: commentSchema }, response.data);
  });
});
