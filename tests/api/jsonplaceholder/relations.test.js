import axios from "axios";
import { expect } from "chai";
import { validateSchema } from "../../../utils/validateSchema.js";
import { commentSchema } from "../../../schemas/jsonplaceholder.schemas.js";
import { postSchema } from "../../../schemas/jsonplaceholder.schemas.js";

// Punto 3. Relaciones: Pruebas de /posts/{id}/comments y /users/{id}/posts
// Pruebas para las relaciones entre comentarios de un post, y posts de un usuario.

describe("JSONPlaceholder Relaciones:", () => {
// Prueba 1: Obtener comentarios de un post
  it("pruebas para obtencion de comentarios en un post", async () => {
    const postId = 1;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("array");
    expect(response.data.every((comment) => comment.postId === postId)).to.be
      .true;

    // Validación de esquema para cada comentario
    validateSchema({ type: "array", items: commentSchema }, response.data);
  });

  // Prueba 2: Obtener posts de un usuario
  it("prueba para obtener post de un usuario", async () => {
    const userId = 1;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("array");
    expect(response.data.every((post) => post.userId === userId)).to.be.true;

    validateSchema({ type: "array", items: postSchema }, response.data);
  });
});
