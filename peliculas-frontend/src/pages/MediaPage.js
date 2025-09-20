import { useEffect, useState } from "react";
import { getMedias, createMedia, deleteMedia } from "../services/mediaService";
import { getGeneros } from "../services/generoService";
import { getDirectores } from "../services/directorService";
import { getProductoras } from "../services/productoraService";
import { getTipos } from "../services/tipoService";
import Swal from "sweetalert2";

function MediaPage() {
  const [medias, setMedias] = useState([]);
  const [form, setForm] = useState({
    serial: "", titulo: "", sinopsis: "", url: "", imagen: "",
    año_estreno: "", generoId: "", directorId: "", productoraId: "", tipoId: ""
  });
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const [m, g, d, p, t] = await Promise.all([
      getMedias(), getGeneros(), getDirectores(), getProductoras(), getTipos()
    ]);
    setMedias(m.data); setGeneros(g.data); setDirectores(d.data); setProductoras(p.data); setTipos(t.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMedia(form);
    Swal.fire("Éxito", "Media creada correctamente", "success");
    setForm({ serial: "", titulo: "", sinopsis: "", url: "", imagen: "", año_estreno: "", generoId: "", directorId: "", productoraId: "", tipoId: "" });
    cargarDatos();
  };

  const handleDelete = async (id) => {
    if (await Swal.fire({ title: "¿Eliminar?", showCancelButton: true }).then(r => r.isConfirmed)) {
      await deleteMedia(id);
      Swal.fire("Eliminado", "El registro fue eliminado", "success");
      cargarDatos();
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-center" style={{ color: '#fff' }}>Películas y Series</h2>
      <form onSubmit={handleSubmit} className="mb-4 p-3 rounded shadow-sm bg-light">
        <div className="row g-2">
          <div className="col-md-3">
            <input type="text" placeholder="Serial" className="form-control" value={form.serial} onChange={(e) => setForm({ ...form, serial: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Título" className="form-control" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="number" placeholder="Año de estreno" className="form-control" value={form.año_estreno} onChange={(e) => setForm({ ...form, año_estreno: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Imagen (URL)" className="form-control" value={form.imagen} onChange={(e) => setForm({ ...form, imagen: e.target.value })} />
          </div>
        </div>
        <div className="row g-2 mt-2">
          <div className="col-md-3">
            <select className="form-control" value={form.generoId} onChange={(e) => setForm({ ...form, generoId: e.target.value })}>
              <option value="">Seleccione un género</option>
              {generos.map(g => <option key={g.id} value={g.id}>{g.nombre}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={form.directorId} onChange={(e) => setForm({ ...form, directorId: e.target.value })}>
              <option value="">Seleccione un director</option>
              {directores.map(d => <option key={d.id} value={d.id}>{d.nombre}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={form.productoraId} onChange={(e) => setForm({ ...form, productoraId: e.target.value })}>
              <option value="">Seleccione una productora</option>
              {productoras.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={form.tipoId} onChange={(e) => setForm({ ...form, tipoId: e.target.value })}>
              <option value="">Seleccione un tipo</option>
              {tipos.map(t => <option key={t.id} value={t.id}>{t.nombre}</option>)}
            </select>
          </div>
        </div>
        <div className="row g-2 mt-2">
          <div className="col-12">
            <textarea placeholder="Sinopsis" className="form-control" value={form.sinopsis} onChange={(e) => setForm({ ...form, sinopsis: e.target.value })}></textarea>
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="btn btn-success px-4" type="submit">Agregar</button>
        </div>
      </form>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {medias.map((m) => (
          <div key={m.id} className="col">
            <div className="card h-100 shadow border-0 bg-dark text-white">
              <img src={m.imagen} className="card-img-top" alt={m.titulo} style={{height:'350px',objectFit:'cover'}} onError={e => e.target.src = 'https://via.placeholder.com/350x500?text=Sin+Imagen'} />
              <div className="card-body">
                <h5 className="card-title">{m.titulo} <span className="badge bg-info ms-2">{m.año_estreno}</span></h5>
                <p className="card-text" style={{minHeight:'60px'}}>{m.sinopsis}</p>
                <p className="card-text"><small className="text-warning">Serial:</small> {m.serial}</p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">Ver más</a>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(m.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaPage;