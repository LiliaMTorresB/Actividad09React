import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.correo) return;
    onAgregar(form);
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
            Nombre Completo *
          </label>
          <input
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            name="nombre"
            placeholder="Ej: Lily Torres"
            value={form.nombre}
            onChange={onChange}
            required
          />
        </div>

        {/* Campo: Teléfono */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
            Teléfono *
          </label>
          <input
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            name="telefono"
            placeholder="Ej: 3113110101"
            value={form.telefono}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campo: Correo */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
            Correo Electrónico *
          </label>
          <input
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            name="correo"
            type="email"
            placeholder="Ej: lilyt@lice.com"
            value={form.correo}
            onChange={onChange}
            required
          />
        </div>

        {/* Campo: Etiqueta */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
            Etiqueta (Categoría)
          </label>
          <input
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            name="etiqueta"
            placeholder="Ej: Family, Trabajo, Estudio"
            value={form.etiqueta}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors text-sm cursor-pointer"
        >
          Agregar contacto
        </button>
      </div>
    </form>
  );
}