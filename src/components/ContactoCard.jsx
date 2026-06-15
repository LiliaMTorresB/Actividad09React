export default function ContactoCard({ nombre, telefono, correo, etiqueta, onEliminar }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 flex items-start justify-between text-left transition-all hover:shadow-md">
      <div className="space-y-1.5 flex-1 pr-4">
        {/* Nombre en tono morado ADSO */}
        <h3 className="text-xl font-bold text-purple-900 tracking-tight">{nombre}</h3>
        
        {/* Teléfono */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-base">📞</span>
          <span className="font-medium text-gray-700">{telefono}</span>
        </p>
        
        {/* Correo */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-base">✉️</span>
          <span className="font-medium text-gray-700 break-all">{correo}</span>
        </p>
        
        {/* Etiqueta Badge (Renderizado Condicional) */}
        {etiqueta && (
          <div className="pt-1">
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full border border-gray-200">
              🏷️ {etiqueta}
            </span>
          </div>
        )}
      </div>

      {/* Botón Eliminar */}
      <button
        onClick={onEliminar}
        className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-xl transition-colors shadow-sm cursor-pointer"
      >
        Eliminar
      </button>
    </div>
  );
}