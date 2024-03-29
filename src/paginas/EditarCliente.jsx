import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>

      {cliente.nombre ? (
        <div>
          <p className="mt-3">
            Utiliza este formulario para editar datos de un cliente
          </p>
          <Formulario cliente={cliente} cargando={cargando} />
        </div>
      ) : (
        <p className="mt-5 text-xl">Cliente ID no válido</p>
      )}
    </div>
  );
};

export default EditarCliente;
