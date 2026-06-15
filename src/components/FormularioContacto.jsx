import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.correo) return;
    onAgregar(form);
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-4 mb-6">
      <div>
        <label className="text-sm font-semibold block mb-1">Nombre *</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Ej: Ana López"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-morado bg-white text-black"
        />
      </div>

      <div>
        <label className="text-sm font-semibold block mb-1">Teléfono *</label>
        <input
          name="telefono"
          value={form.telefono}
          onChange={onChange}
          placeholder="Ej: 300 123 4567"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-morado bg-white text-black"
        />
      </div>

      <div>
        <label className="text-sm font-semibold block mb-1">Correo *</label>
        <input
          name="correo"
          value={form.correo}
          onChange={onChange}
          placeholder="Ej: ana@sena.edu.co"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-morado bg-white text-black"
        />
      </div>

      <div>
        <label className="text-sm font-semibold block mb-1">Etiqueta (opcional)</label>
        <input
          name="etiqueta"
          value={form.etiqueta}
          onChange={onChange}
          placeholder="Ej: Trabajo"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-morado bg-white text-black"
        />
      </div>

      <button className="bg-morado hover:bg-morado-oscuro text-white font-medium py-2 rounded-md transition-colors">
        Agregar contacto
      </button>
    </form>
  );
}