import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeProvider';
import './Provinces.css';

function Provinces({ showBoxProvinder, setShowBoxProvinder, onKetqua }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = (e, t) => {
    const provin = e.target.innerHTML;
    onKetqua(provin);
    setShowBoxProvinder(false);
  };

  //
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onKetqua(null);
      setShowBoxProvinder(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxProvinder) {
        setShowBoxProvinder(false);
      }
    },
    [setShowBoxProvinder, showBoxProvinder]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxProvinder ? (
        <div
          className={
            theme === 'dark' ? 'background-pro dark' : 'background-pro'
          }
        >
          <div
            className="overlay-pro"
            onClick={closeModal}
            ref={modalRef}
          ></div>
          <div className="provinces-component">
            <div
              className="provinces-iconback"
              onClick={() => setShowBoxProvinder((prev) => !prev)}
            >
              <svg
                data-name="Group 28853"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="provinces-iconback-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  data-name="Rectangle 4424"
                  fill="none"
                  d="M0 24V0h24v24z"
                ></path>
                <g data-name="Group 27961">
                  <path
                    data-name="Path 20155"
                    d="M15.241 11.761L9.58 6.1a.34.34 0 00-.48.48L14.519 12 9.1 17.419a.338.338 0 000 .48.342.342 0 00.239.1.331.331 0 00.239-.1l5.661-5.66a.338.338 0 00.002-.478z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="provinces-search">
              <h3 className="provinces-search-title">
                Th??nh ph??? ho???c s??n bay ph??? bi???n
              </h3>
              <div className="provinces-search-form">
                <div className="provinces-search-lup">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="provinces-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28003">
                      <path
                        data-name="Rectangle 4474"
                        fill="none"
                        d="M0 0h24v24H0z"
                      ></path>
                      <g data-name="Group 28211">
                        <g data-name="4">
                          <g data-name="Group 28210">
                            <path
                              data-name="Path 20260"
                              d="M20.83 20.021l-4.647-4.573a7.351 7.351 0 001.965-5A7.514 7.514 0 0010.573 3 7.513 7.513 0 003 10.453a7.513 7.513 0 007.573 7.453 7.616 7.616 0 004.767-1.664l4.665 4.591a.589.589 0 00.824 0 .567.567 0 00.001-.812zm-10.257-3.262a6.358 6.358 0 01-6.408-6.306 6.358 6.358 0 016.408-6.306 6.358 6.358 0 016.408 6.306 6.358 6.358 0 01-6.408 6.306z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="form-field-pro">
                  <input
                    type="text"
                    className="form-input-pro"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="form-label-pro">
                    ??i???m kh???i h??nh
                  </label>
                </div>
                <div className="provinces-search-bottom">
                  <svg
                    className="provinces-icon-bot"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="provinces-menu">
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Mi???n B???c</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  H?? N???i
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  H???i Ph??ng
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  ??i???n Bi??n Ph???
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Qu???ng Ninh
                </li>
              </ul>
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Mi???n Trung</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  ???? N???ng
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Nha Trang
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  ???? L???t
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  ???? L???t
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Hu???
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Bu??n Ma Thu???t
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  PleiKu
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Ph?? Y??n
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Thanh H??a
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Quy Nh??n
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Qu???ng Nam
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Qu???ng B??nh
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Vinh
                </li>
              </ul>
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Mi???n Nam</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  H??? Ch?? Minh
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Ph?? Qu???c
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  C???n Th??
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  C?? Mau
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  C??n ?????o
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Ki??n Giang
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Provinces;
