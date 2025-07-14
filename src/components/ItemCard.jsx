

export default function ItemCard({ nome, descricao, condicao, foto }) {
  return (
    <div className="bg-white rounded-2xl min-w-80 shadow-md p-4 border border-gray-200 hover:shadow-laranja ">
      <img
        src={foto}
        alt={nome}
        className="h-90 object-cover rounded-xl mb-4"
      />
      <h2 className="text-gray-900 text-lg font-bold">{nome}</h2>
      <p className="text-gray-600 text-sm mb-1">{descricao}</p>
      <span
        className={`inline-block text-xs px-2 py-1 rounded-full ${
          condicao === "Novo"
            ? "bg-green-100 text-green-700"
            : condicao === "Seminovo"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {condicao}
      </span>
    </div>
  );
}


