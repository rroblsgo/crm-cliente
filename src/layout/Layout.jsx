import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      {/** Barra lateral */}
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <Link
          to="/"
          className={`${
            urlActual === '/' ? 'text-blue-300' : 'text-white'
          } text-2xl block mt-2 hover:text-blue-300`}
        >
          <h2 className="text-4xl font-black text-center text-white hover:text-blue-300 pb-4 border-b-4 border-gray-100">
            Crm - Clientes
          </h2>
        </Link>
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
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
