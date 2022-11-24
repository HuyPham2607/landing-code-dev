import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
import "./DetailReport.css";
function DetailReport() {
  return (
    <div>
      <NavbarAdmin />
      <div className="wrapper-detail-report">
        <div className="d-flex justify-content-center py-5 content-admin">
          <div className="underline-admin"></div>
          <h3>
            ADMIN WORKSPACE
            <p>Detect objects in image</p>
          </h3>
        </div>
        <div className="main-detailreport">
          <div className="img-results">
            <div className="d-flex">
              {/* <img
              className="img-detail-report"
              src="https://s3-alpha-sig.figma.com/img/633f/b256/4be04c2552467a911974c1bc163bf3ba?Expires=1670198400&Signature=hfkwCO5unJI3r4rBnIxHhYmSlz~QJlEUR1kV5E32WUWyP6qwNiiDxsB0F1LQOzqPFj9Jjvi-nU2SDmb8D~5t1-injn6yEKMLymGBnDtThXvWMUbOMmb4v1AlbZRRXKXtjFfmduFXhPIyaFL6tCPeG4v-505VoFsp8KVDRn7aNp6zi6GFY9Ks6LjMZ8HmosRXIWR3exrlImKZGyLvz7zfk95ffr5gvtf7hMxsMuVB6eecPOxB1MhGlhtewc2QYS5whwkdw6oGD4wQr5LlPeKc6UZdlaXHmt2tUWcvplk-Dm~X0b4AhPk2WR17981ppbDZdayw0I9sFBdbLtHdWz7F5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
            <img
              className="img-detail-report"
              src="https://s3-alpha-sig.figma.com/img/633f/b256/4be04c2552467a911974c1bc163bf3ba?Expires=1670198400&Signature=hfkwCO5unJI3r4rBnIxHhYmSlz~QJlEUR1kV5E32WUWyP6qwNiiDxsB0F1LQOzqPFj9Jjvi-nU2SDmb8D~5t1-injn6yEKMLymGBnDtThXvWMUbOMmb4v1AlbZRRXKXtjFfmduFXhPIyaFL6tCPeG4v-505VoFsp8KVDRn7aNp6zi6GFY9Ks6LjMZ8HmosRXIWR3exrlImKZGyLvz7zfk95ffr5gvtf7hMxsMuVB6eecPOxB1MhGlhtewc2QYS5whwkdw6oGD4wQr5LlPeKc6UZdlaXHmt2tUWcvplk-Dm~X0b4AhPk2WR17981ppbDZdayw0I9sFBdbLtHdWz7F5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReport;
