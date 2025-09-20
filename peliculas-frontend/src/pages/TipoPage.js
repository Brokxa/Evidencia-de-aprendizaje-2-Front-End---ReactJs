import { useEffect, useState } from "react";
import { getTipos, createTipo, deleteTipo } from "../services/tipoService";
import Swal from "sweetalert2";

function TipoPage() {
  const [tipos, setTipos] = useState([]);
  const [nuevoTipo, setNuevoTipo] = useState({ nombre: "", estado: "Activo" });

  useEffect(() => {
    cargarTipos();
  }, []);

  const cargarTipos = async () => {
    const response = await getTipos();
    setTipos(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTipo(nuevoTipo);
    Swal.fire("Éxito", "Tipo creado correctamente", "success");
    setNuevoTipo({ nombre: "", estado: "Activo" });
    cargarTipos();
  };

  const handleDelete = async (id) => {
    if (await Swal.fire({ title: "¿Eliminar?", showCancelButton: true }).then(r => r.isConfirmed)) {
      await deleteTipo(id);
      Swal.fire("Eliminado", "El tipo fue eliminado", "success");
      cargarTipos();
    }
  };

  return (
    <div>
      <h2>Tipos</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={nuevoTipo.nombre}
          onChange={(e) => setNuevoTipo({ ...nuevoTipo, nombre: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>

      <ul className="list-group">
        {tipos.map((t) => (
          <li key={t.id} className="list-group-item d-flex justify-content-between">
            {t.nombre}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TipoPage;