const Alerta = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-2 rounded uppercase">
      {children}
    </div>
  );
};

export default Alerta;
