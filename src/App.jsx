import { useState, useEffect } from "react";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  // Se mantiene la persistencia intacta de la clase pasada
  const contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];
  const [contactos, setContactos] = useState(contactosGuardados);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-morado text-center mb-2">
        Agenda ADSO v4
      </h1>
        <p className="text-gray-500 text-center mb-6 font-bold">
            Interfaz moderna con TailwindCSS
        </p>
      
      {/* Mini Reto Institucional incluido */}
      <div className="flex justify-center mb-6">
        <p className="bg-morado text-white text-xs font-bold rounded px-2 py-1 w-fit">
          ADSO
        </p>
      </div>

      <FormularioContacto onAgregar={agregarContacto} />
      
      <div className="mt-6">
        {contactos.map((c) => (
          <ContactoCard
            key={c.correo}
            {...c}
            onEliminar={eliminarContacto}
          />
        ))}
      </div>
    </main>
  );
}