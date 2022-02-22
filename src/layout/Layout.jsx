import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  console.log(urlActual);
  return (
    <div className="md:flex md:min-h-screen">
      {/** Barra lateral */}
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          Crm - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            to="/clientes"
            className={`${
              urlActual === '/clientes' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      {/** Resto pantalla */}
      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
