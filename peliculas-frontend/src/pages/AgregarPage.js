import GeneroPage from "./GeneroPage";
import DirectorPage from "./DirectorPage";
import ProductoraPage from "./ProductoraPage";
import TipoPage from "./TipoPage";

function AgregarPage() {
  return (
    <div className="row g-4">
      <div className="col-md-6 col-lg-3">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h5 className="card-title text-primary">Géneros</h5>
            <GeneroPage />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h5 className="card-title text-success">Directores</h5>
            <DirectorPage />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h5 className="card-title text-warning">Productoras</h5>
            <ProductoraPage />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h5 className="card-title text-info">Tipos</h5>
            <TipoPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarPage;
