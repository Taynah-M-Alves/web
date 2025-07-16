

export default function ItemCard({ nome, descricao, condicao, foto }) {
  return (
    <div className="bg-gray-800 rounded-2xl min-w-60 shadow-md p-4 border border-gray-700 hover:border-amber-600 ">
      <img
        src={foto}
        alt={nome}
        className="h-90 object-cover rounded-xl mb-4"
      />
      <h2 className="text-white text-lg font-bold">{nome}</h2>
      <p className="text-gray-300 text-sm mb-1">{descricao}</p>
      <span
        className={`inline-block text-xs px-2 py-1 rounded-full ${
          condicao === "Novo"
            ? "bg-green-100 text-green-700"
            : condicao === "Seminovo"
            ? "bg-yellow-100 text-yellow-300"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {condicao}
      </span>
    </div>
  );
}


