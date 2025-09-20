import { useEffect, useState } from "react";
import { getDirectores, createDirector, deleteDirector } from "../services/directorService";
import Swal from "sweetalert2";

function DirectorPage() {
  const [directores, setDirectores] = useState([]);
  const [nuevoDirector, setNuevoDirector] = useState({ nombre: "", estado: "Activo" });

  useEffect(() => {
    cargarDirectores();
  }, []);

  const cargarDirectores = async () => {
    const response = await getDirectores();
    setDirectores(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDirector(nuevoDirector);
    Swal.fire("Éxito", "Director creado correctamente", "success");
    setNuevoDirector({ nombre: "", estado: "Activo" });
    cargarDirectores();
  };

  const handleDelete = async (id) => {
    if (await Swal.fire({ title: "¿Eliminar?", showCancelButton: true }).then(r => r.isConfirmed)) {
      await deleteDirector(id);
      Swal.fire("Eliminado", "El director fue eliminado", "success");
      cargarDirectores();
    }
  };

  return (
    <div>
      <h2>Directores</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={nuevoDirector.nombre}
          onChange={(e) => setNuevoDirector({ ...nuevoDirector, nombre: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>

      <ul className="list-group">
        {directores.map((d) => (
          <li key={d.id} className="list-group-item d-flex justify-content-between">
            {d.nombre}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(d.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DirectorPage;