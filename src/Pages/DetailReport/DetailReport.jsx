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
              <div className="img-customer">
                <p>Image uploaded</p>
                <img
                  className="img-detail-report"
                  src="https://s3-alpha-sig.figma.com/img/633f/b256/4be04c2552467a911974c1bc163bf3ba?Expires=1670198400&Signature=hfkwCO5unJI3r4rBnIxHhYmSlz~QJlEUR1kV5E32WUWyP6qwNiiDxsB0F1LQOzqPFj9Jjvi-nU2SDmb8D~5t1-injn6yEKMLymGBnDtThXvWMUbOMmb4v1AlbZRRXKXtjFfmduFXhPIyaFL6tCPeG4v-505VoFsp8KVDRn7aNp6zi6GFY9Ks6LjMZ8HmosRXIWR3exrlImKZGyLvz7zfk95ffr5gvtf7hMxsMuVB6eecPOxB1MhGlhtewc2QYS5whwkdw6oGD4wQr5LlPeKc6UZdlaXHmt2tUWcvplk-Dm~X0b4AhPk2WR17981ppbDZdayw0I9sFBdbLtHdWz7F5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div className="download-image">
                  <button className="btn-download-image">DownLoad Image</button>
                </div>
              </div>
              <div className="img-result-system">
                <p>Detected objects</p>
                <img
                  className="img-detail-report"
                  src="https://s3-alpha-sig.figma.com/img/633f/b256/4be04c2552467a911974c1bc163bf3ba?Expires=1670198400&Signature=hfkwCO5unJI3r4rBnIxHhYmSlz~QJlEUR1kV5E32WUWyP6qwNiiDxsB0F1LQOzqPFj9Jjvi-nU2SDmb8D~5t1-injn6yEKMLymGBnDtThXvWMUbOMmb4v1AlbZRRXKXtjFfmduFXhPIyaFL6tCPeG4v-505VoFsp8KVDRn7aNp6zi6GFY9Ks6LjMZ8HmosRXIWR3exrlImKZGyLvz7zfk95ffr5gvtf7hMxsMuVB6eecPOxB1MhGlhtewc2QYS5whwkdw6oGD4wQr5LlPeKc6UZdlaXHmt2tUWcvplk-Dm~X0b4AhPk2WR17981ppbDZdayw0I9sFBdbLtHdWz7F5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body-result">
        <div className="content-report">
          <h2>Report</h2>
          <div className="list-item-detail">
            <div className="item-detail">
              <div className="image-item-reuslt">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2333/f5b8/d16a5cc761e7e1aa858d7a24cf1bd828?Expires=1670198400&Signature=Rtm~BMSF0d0OnnCIadmymKK4S6Vq9hEUHqUJ6RdFTeu81CW1ZDdSDX25eLoVo5xmyIP9mj1OQj3OJ6lsimBQUBitRsirnDJSQqqk~wFT4UWTWfEXaq0vSeOvn9FOWYy9MqB7ubXzUWkEbbvJgbvplowtVi~fqa3RDPh5MzoW6-fIaVljgtKkrV5aDqrZMsrJ5tjJmMmLpY3jRByHLPn6jJSzSltQOfbvFf-~OocD080s2uF3Qs5UOEh9MZeNRn3w7-bbA~NfYd4AiWiec67ejowFTXAky0yQSIF9dEv-M98x5abwyyIn9DtOtapMPdc2-Cm-ogx0kBhGOvQVCK1YpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </div>
              <div className="description-result">
                <p>
                  {" "}
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                  Somthing for the report.... Somthing for the report....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReport;
