import { Route, Routes } from 'react-router-dom';
import { useInitializeAuth } from './hooks/use-initialize-auth';
import { MainLayout } from './layout/main-layout';
import { AuthPage } from './pages/auth-page';
import { HomePage } from './pages/home-page';
import { ItemsGrid } from './pages/Items-grid'

// src/app.jsx
const items = [
  {
    id: 1,
    nome: "Bicicleta Caloi",
    descricao: "Bicicleta aro 26 com marchas",
    condicao: "Usado",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 2,
    nome: "Notebook Lenovo",
    descricao: "Notebook i5, 8GB RAM",
    condicao: "Seminovo",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 3,
    nome: "Liquidificador Oster",
    descricao: "Modelo potente, 3 velocidades",
    condicao: "Novo",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 4,
    nome: "Cadeira Gamer",
    descricao: "Ergonômica e confortável",
    condicao: "Usado",
  foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 5,
    nome: "Celular Samsung A32",
    descricao: "64GB, com película",
    condicao: "Seminovo",
    foto: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=300",
  },
  {
    id: 6,
    nome: "Fone Bluetooth JBL",
    descricao: "Som estéreo de alta qualidade",
    condicao: "Novo",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 7,
    nome: "Camisa Esportiva Nike",
    descricao: "Tamanho M, Dry Fit",
    condicao: "Novo",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 8,
    nome: "Mochila Escolar",
    descricao: "Com rodinhas e compartimentos",
    condicao: "Usado",
    foto: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
  },
  {
    id: 9,
    nome: "Relógio Digital Casio",
    descricao: "Resistente à água",
    condicao: "Seminovo",
    foto: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=300",
  },
];

function App() {
  const { isLoading } = useInitializeAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-blue-500 border-b-2" />
        <p className="ml-4 text-gray-700">Carregando...</p>
      </div>
    );
  }
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<HomePage />} path="/" />
        <Route
          element={<h2>Página de Detalhes do Item</h2>}
          path="/items/:id"
        />
      </Route>
      <Route element={<AuthPage />} path={'/auth'} />
      <Route element={<ItemsGrid items={items}/>} path={'/items'} />
    </Routes>
  );
}

export default App;

