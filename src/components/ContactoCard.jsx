export default function ContactoCard({ nombre, telefono, correo, etiqueta, onEliminar }) {
  return (
    <article className="bg-white border rounded-lg shadow-sm p-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-morado-oscuro mb-1">{nombre}</h3>
        <p className="text-gray-600 text-sm">📞 {telefono}</p>
        <p className="text-gray-600 text-sm">📧 {correo}</p>
        {etiqueta && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded mt-1 font-medium">
            🏷️ {etiqueta}
          </span>
        )}
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={() => onEliminar(correo)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-md transition-colors"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}