import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./ListReport.css";
function ListReport() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className="main-results py-4">
              <div className="item">
                <div className="content">
                  <div>
                    <img
                      className="image-item"
                      src="https://s3-alpha-sig.figma.com/img/633f/b256/4be04c2552467a911974c1bc163bf3ba?Expires=1670198400&Signature=hfkwCO5unJI3r4rBnIxHhYmSlz~QJlEUR1kV5E32WUWyP6qwNiiDxsB0F1LQOzqPFj9Jjvi-nU2SDmb8D~5t1-injn6yEKMLymGBnDtThXvWMUbOMmb4v1AlbZRRXKXtjFfmduFXhPIyaFL6tCPeG4v-505VoFsp8KVDRn7aNp6zi6GFY9Ks6LjMZ8HmosRXIWR3exrlImKZGyLvz7zfk95ffr5gvtf7hMxsMuVB6eecPOxB1MhGlhtewc2QYS5whwkdw6oGD4wQr5LlPeKc6UZdlaXHmt2tUWcvplk-Dm~X0b4AhPk2WR17981ppbDZdayw0I9sFBdbLtHdWz7F5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                    />
                  </div>
                  <div className="text-item px-3">
                    <div className="calendar-item">
                      <div className="d-flex">
                        <div className="day-item d-flex">
                          <span className="icon-day">
                            <FontAwesomeIcon icon={faCalendarDay} />
                          </span>
                          <p>23 Sep 2022</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="time-item d-flex">
                          <span className="icon-time">
                            <FontAwesomeIcon icon={faClock} />
                          </span>
                          <p>17h30</p>
                        </div>
                      </div>
                      <div className="underline"></div>
                    </div>
                    <div>
                      <div>
                        <p>Object delected:</p>
                      </div>
                      <li>Jar</li>
                      <li>Knife</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems() {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 4);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          className="paginate-list"
          breakLabel="..."
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <div className="wrapper-listreport">
      <NavbarAdmin />

      <div className="d-flex justify-content-center py-5 content-admin">
        <div className="underline-admin"></div>
        <h3>
          ADMIN WORKSPACE
          <p>Detect objects in image</p>
        </h3>
      </div>
      <div className="main-listreport">
        <div className="title-listreport">
          <h2>REPORTS LIST</h2>
          <div className="underline"></div>
        </div>
      </div>
      <div>{PaginatedItems()}</div>
      <div className="footer"></div>
    </div>
  );
}

export default ListReport;
