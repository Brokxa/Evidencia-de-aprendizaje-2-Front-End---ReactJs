import { useEffect, useState } from "react";
import { getProductoras, createProductora, deleteProductora } from "../services/productoraService";
import Swal from "sweetalert2";

function ProductoraPage() {
  const [productoras, setProductoras] = useState([]);
  const [nuevaProductora, setNuevaProductora] = useState({ nombre: "", descripcion: "", estado: "Activo" });

  useEffect(() => {
    cargarProductoras();
  }, []);

  const cargarProductoras = async () => {
    const response = await getProductoras();
    setProductoras(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProductora(nuevaProductora);
    Swal.fire("Éxito", "Productora creada correctamente", "success");
    setNuevaProductora({ nombre: "", descripcion: "", estado: "Activo" });
    cargarProductoras();
  };

  const handleDelete = async (id) => {
    if (await Swal.fire({ title: "¿Eliminar?", showCancelButton: true }).then(r => r.isConfirmed)) {
      await deleteProductora(id);
      Swal.fire("Eliminado", "La productora fue eliminada", "success");
      cargarProductoras();
    }
  };

  return (
    <div>
      <h2>Productoras</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={nuevaProductora.nombre}
          onChange={(e) => setNuevaProductora({ ...nuevaProductora, nombre: e.target.value })}
        />
        <input type="text" placeholder="Descripción" className="form-control mb-2"
          value={nuevaProductora.descripcion}
          onChange={(e) => setNuevaProductora({ ...nuevaProductora, descripcion: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>

      <ul className="list-group">
        {productoras.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between">
            {p.nombre} - {p.descripcion}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductoraPage;