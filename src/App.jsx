import { useEffect, useState } from "react";
import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
} from "./api.js";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Cargar la lista desde la API al montar el componente (GET)
  useEffect(() => {
    async function cargarContactos() {
      try {
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error(error);
        setError("No se pudo cargar la lista de contactos");
      } finally {
        setCargando(false);
      }
    }
    cargarContactos();
  }, []);

  // Agregar contacto usando la API (POST)
  const agregarContacto = async (nuevo) => {
    try {
      const creado = await crearContacto(nuevo);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error(error);
      setError("No se pudo agregar el contacto");
    }
  };

  // Eliminar contacto usando la API (DELETE)
  const eliminarContacto = async (id) => {
    try {
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error(error);
      setError("No se pudo eliminar el contacto");
    }
  };

  return (
    <main className="min-h-screen w-full pb-12">
      {/* Encabezado */}
      <header className="max-w-4xl mx-auto px-6 pt-8 text-left">
        <p className="text-xs font-bold text-purple-700 tracking-[0.2em] uppercase">
          Programa ADSO — SENA
        </p>
        <h1 className="text-4xl font-black text-gray-900 mt-1">
          Agenda ADSO v5
        </h1>
        <p className="text-gray-600 text-sm mt-1 font-medium">
          Gestión de contactos con persistencia en API local (JSON Server) y estilos con Tailwind CSS.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {/* Alertas de Estado */}
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-semibold shadow-sm">
            ⚠️ {error}
          </div>
        )}
        
        {cargando && (
          <div className="rounded-xl bg-purple-50 border border-purple-200 px-4 py-3 text-sm text-purple-700 font-medium animate-pulse shadow-sm">
            🔄 Cargando contactos desde la API local...
          </div>
        )}

        {/* Formulario de Entrada */}
        <FormularioContacto onAgregar={agregarContacto} />

        {/* Listado de Tarjetas en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {contactos.length === 0 && !cargando && (
            <p className="text-gray-600 text-sm font-medium col-span-full bg-white/50 p-4 rounded-xl text-center border border-dashed border-gray-300">
              No hay contactos registrados aún. Utiliza el formulario superior.
            </p>
          )}
          
          {contactos.map((c) => (
            <ContactoCard
              key={c.id}
              {...c}
              onEliminar={() => eliminarContacto(c.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}