import axios from "axios";
import { expect } from "chai";

// Punto 4. Casos Negativos: Pruebas de errores esperados.

describe("JSONPlaceholder Casos Negativos", () => {

// Prueba 1: Error 404 por IDs inexistentes
// Caso 1:
  it("Error 404 por post inexistente", async () => {
    try {
      await axios.get("https://jsonplaceholder.typicode.com/posts/999999");
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });

// Caso 2:
  it("Error 404 por post de usuario inexistente", async () => {
    try {
      await axios.get("https://jsonplaceholder.typicode.com/users/999/posts");
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });

  // Prueba 2: Error de payload inválido
  it("Error por campos faltantes en el post", async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "Solo título",
      });
    } catch (error) {
      expect(error.response.status).to.equal(201);
      const isValid = validateSchema(postSchema, error.response.data);
      expect(isValid).to.be.false; // Validación de esquema fallida
    }
  });

  // Prueba 3: Error de método no permitido
  it("Error 405 para metodo no permitido", async () => {
    try {
      await axios.patch("https://jsonplaceholder.typicode.com/posts");
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
