import { useEffect, useState } from "react";
import { getGeneros, createGenero, deleteGenero } from "../services/generoService";
import Swal from "sweetalert2";

function GeneroPage() {
  const [generos, setGeneros] = useState([]);
  const [nuevoGenero, setNuevoGenero] = useState({ nombre: "", descripcion: "", estado: "Activo" });

  useEffect(() => {
    cargarGeneros();
  }, []);

  const cargarGeneros = async () => {
    const response = await getGeneros();
    setGeneros(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGenero(nuevoGenero);
    Swal.fire("Éxito", "Género creado correctamente", "success");
    setNuevoGenero({ nombre: "", descripcion: "", estado: "Activo" });
    cargarGeneros();
  };

  const handleDelete = async (id) => {
    if (await Swal.fire({ title: "¿Eliminar?", showCancelButton: true }).then(r => r.isConfirmed)) {
      await deleteGenero(id);
      Swal.fire("Eliminado", "El género fue eliminado", "success");
      cargarGeneros();
    }
  };

  return (
    <div>
      <h2>Géneros</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={nuevoGenero.nombre}
          onChange={(e) => setNuevoGenero({ ...nuevoGenero, nombre: e.target.value })}
        />
        <input type="text" placeholder="Descripción" className="form-control mb-2"
          value={nuevoGenero.descripcion}
          onChange={(e) => setNuevoGenero({ ...nuevoGenero, descripcion: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>

      <ul className="list-group">
        {generos.map((g) => (
          <li key={g.id} className="list-group-item d-flex justify-content-between">
            {g.nombre} - {g.descripcion}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(g.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeneroPage;