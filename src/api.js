// Punto base de la API local conectada a tu JSON Server (Puerto 3000)
const API = "http://localhost:3000/contactos";

// GET: Listar todos los contactos guardados en el archivo db.json
export async function listarContactos() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Error al listar contactos");
  return res.json();
}

// POST: Crear y guardar un nuevo contacto en la base de datos
export async function crearContacto(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear el contacto");
  return res.json();
}

// DELETE: Eliminar un contacto de la base de datos local usando su ID
export async function eliminarContactoPorId(id) {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar el contacto");
  return true;
}