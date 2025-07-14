import ItemCard from '../components/itemcard';

export function ItemsGrid({ items }) {
  return (
    <div className="p-8 flex flex-col ">
      <h1 className=" text-7xl font-bold mb-6 self-center">Lista de Itens</h1>
      <h2 className=" text-4xl font-serif mb-6 self-center">Conheça os itens disponíveis para troca.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-11/12 justify-items-center">
        {items.map((item) => (
          <ItemCard
            nome={item.nome}
            descricao={item.descricao}
            condicao={item.condicao}
            foto={item.foto}
          />
        ))}
      </div>
    </div>
  );
}
