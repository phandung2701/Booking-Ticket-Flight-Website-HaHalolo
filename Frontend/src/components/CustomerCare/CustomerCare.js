import React, { Fragment,useContext } from "react";
import { ThemeContext } from '../../shared/context/ThemeProvider';

import "./CustomerCare.css";

function CustomerCare() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className={theme === 'dark' ?"customerCare-component dark":"customerCare-component"}>
        <div className="customerCare__avatar">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='57' height='56' viewBox='0 0 57 56'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cellipse cx='28.5' cy='28' rx='28.5' ry='28' transform='translate(0 -0.425)' fill='none'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg transform='translate(0 0.572)'%3E%3Cellipse cx='28.5' cy='28' rx='28.5' ry='28' transform='translate(0 -0.572)' fill='%23f2f2f2'/%3E%3Cg transform='translate(0 -0.147)'%3E%3Cg clip-path='url(%23a)'%3E%3Cg transform='translate(8.267 7.449)'%3E%3Cpath d='M29.956,22.353s-5.593,2.86-1.517,9c0,0-4.805.555-6.014-.826a3.9,3.9,0,0,0,.394.9s-4.656-.61-6.323-2.374S20.029,3.819,32.429,8.622c0,0,11.024,1.005,7.9,13.432s.982,13.116.982,13.116a5.913,5.913,0,0,1-1.788.282s-.753-.443-.839-.916a2.9,2.9,0,0,0,.211.984s-4.507-.325-6.442-2.371S28.887,24.846,29.956,22.353Z' transform='translate(-9.22 -7.87)' fill='%2324a8d8'/%3E%3Cpath d='M38.991,29.174l-.448.062a3.67,3.67,0,0,1-4.129-3.123l-.325-2.341a3.671,3.671,0,0,1,3.123-4.129l.448-.062A3.67,3.67,0,0,1,41.789,22.7l.325,2.341A3.671,3.671,0,0,1,38.991,29.174Z' transform='translate(-10.272 -8.551)' fill='%23c2f9ff'/%3E%3Cpath d='M39.239,48.465c-1.669,1.288-2.729,5.939-5.416,6.706-10.087,2.879-15.5-9.1-17.273-14.946a8.792,8.792,0,0,1,3.4-1.239c.733-.124,1.506-.222,2.148-.282,1.1-.936,2.626-4.616,2.719-10.215l.487.1,8.157,1.788s-.238,2.576-.3,5c-.043,1.9-.1,2.353.041,2.579.634.1,1.383,1.727,1.383,1.727V39.7A51.819,51.819,0,0,1,39.239,48.465Z' transform='translate(-9.241 -9.078)' fill='%23ffcfae'/%3E%3Cpath d='M34.012,30.388s-.24,2.574-.3,5c-4.581-.224-6.917-4.455-7.862-6.793Z' transform='translate(-9.789 -9.084)' fill='%23ed985f'/%3E%3Cg transform='translate(0 28.808)'%3E%3Cpath d='M74.5,73.274s-4.8.176-10.006.194H62.63c-4.243-.018-8.412-.167-10.185-.624-1.734-.446-8.4-4.965-13.736-10.439h0c-.414.986-.726,1.739-.734,1.8a27.736,27.736,0,0,1-.736,3.642,44.168,44.168,0,0,1-3.294,8.428l-2.856,0-22.3-.033S13,69.743,11.865,53.123c-.029-.421,3.883-13.835,3.883-13.835s3.039-.532,6.552-.815c.331.3,1.014,9.129,5.408,9.637.714.083,5.3,7.087,5.3,7.087L34.4,48.044l-1.642-9.491a49.911,49.911,0,0,1,5.016,1.539,5.538,5.538,0,0,1,2.8,2.485C43.638,48.186,53.6,66.281,54.619,66.7a73.554,73.554,0,0,0,8.339,1.806h0c5.082.928,10.541,1.809,10.541,1.809Z' transform='translate(-8.784 -38.473)' fill='%2324a8d8'/%3E%3Cpath d='M37.108,78.634h-1.6l0-.007Z' transform='translate(-10.357 -40.837)' fill='%2324a8d8'/%3E%3C/g%3E%3Cpath d='M35.3,31.952s-10.846-.213-10.61-6.964-1-11.328,5.929-11.482,8.188,2.474,8.658,4.747S38.131,31.833,35.3,31.952Z' transform='translate(-9.72 -8.195)' fill='%23ffcfae'/%3E%3Cpath d='M33.7,29.1s.07.808,1.847.936c0,0,1.494.107,1.556-.762A4.381,4.381,0,0,0,33.7,29.1Z' transform='translate(-10.251 -9.098)' fill='%23fff'/%3E%3Cg transform='translate(16.35 14.726)'%3E%3Cpath d='M33.846,31.513a11.917,11.917,0,0,1-7.689-7.84l.659-.163-.328.081.328-.082a11.223,11.223,0,0,0,7.236,7.358l.117.036-.2.647Z' transform='translate(-26.157 -23.51)' fill='%23122544'/%3E%3C/g%3E%3Cpath d='M35.008,32.418l-.582-.188a.565.565,0,0,1-.368-.708h0a.565.565,0,0,1,.708-.368l.581.188a.565.565,0,0,1,.368.708h0A.564.564,0,0,1,35.008,32.418Z' transform='translate(-10.27 -9.233)' fill='%23ed7d2b'/%3E%3Cpath d='M35.84,12.488s-2.777,8.225-6.943,9.621-5.547-.257-5.547-.257a12.048,12.048,0,0,0,3.422-7.381S33.5,9.124,35.84,12.488Z' transform='translate(-9.642 -8.07)' fill='%2324a8d8'/%3E%3Cpath d='M31.111,14.955s5.655-.317,7.341,1.293c1.223,1.161,1.191,1.767,1.285,3.316,0,0,2.473-3.815-.072-6.485C36.971,10.247,31.111,14.955,31.111,14.955Z' transform='translate(-10.098 -8.117)' fill='%2324a8d8'/%3E%3Cpath d='M35.954,13.355s-1.412,7.871-6.594,10.729c0,0,5.014-5.132,5.1-10.267S35.954,13.355,35.954,13.355Z' transform='translate(-9.995 -8.072)' fill='%2324a8d8'/%3E%3Cpath d='M16.5,29.053c1.668,1.765,6.323,2.376,6.323,2.376a3.876,3.876,0,0,1-.393-.9c2.392,1.94,8.269.531,8.269.531-4.688-1.035-3.17-7.8-1.575-8.088A146.5,146.5,0,0,1,32.754,8.667c-.207-.034-.325-.045-.325-.045C20.029,3.819,14.828,27.291,16.5,29.053Z' transform='translate(-9.22 -7.87)' fill='%2324a8d8'/%3E%3Cg transform='translate(12.522)'%3E%3Cpath d='M27.024,28.437l-.448.062a3.67,3.67,0,0,1-4.129-3.123l-.325-2.341a3.671,3.671,0,0,1,3.123-4.129l.448-.062a3.67,3.67,0,0,1,4.129,3.123l.325,2.341A3.671,3.671,0,0,1,27.024,28.437Z' transform='translate(-22.089 -8.508)' fill='%23c2f9ff'/%3E%3Cg transform='translate(1.961)'%3E%3Cpath d='M24.218,19.254c-.266-.5.667-4.376,2.04-7.383a9.1,9.1,0,0,1,3.533-3.9,2.568,2.568,0,0,1,1.474,0,11.212,11.212,0,0,1,1.293.521C28.63,9.716,25.218,17.949,25.464,18.8a.285.285,0,0,0-.026-.06Z' transform='translate(-24.173 -7.863)' fill='%23c2f9ff'/%3E%3C/g%3E%3Cpath d='M26.222,26.266,26,26.3a1.829,1.829,0,0,1-2.057-1.556l-.162-1.166a1.829,1.829,0,0,1,1.556-2.057l.223-.031a1.829,1.829,0,0,1,2.057,1.556l.162,1.166A1.829,1.829,0,0,1,26.222,26.266Z' transform='translate(-22.188 -8.664)' fill='%2324a8d8'/%3E%3C/g%3E%3Cpath d='M23.587,37.1s-3.11.907-3.82,1.622c0,0,3.252,8.313,7.94,12.193l1.253-.889v2.022l4.693,3.072S23.346,39.611,23.587,37.1Z' transform='translate(-9.431 -9.584)' fill='%23c2f9ff'/%3E%3Cpath d='M37.523,68.771A44.168,44.168,0,0,1,34.229,77.2h1.592l-1.6,0H19.406s1.719,0,1.716-.011c-.04-.151,2.506-7.053-1.716-9.882s-5.763-9.8-5.763-9.8L27.1,54.22s5.545,8.094,7.123,9.633c1.211,1.184,4.036,1.273,4.036,1.273Z' transform='translate(-9.07 -10.592)' fill='%23c2f9ff'/%3E%3Cpath d='M34.247,38.471s1.431,11.31.254,16.646c0,0,1.921-3.53,2.191-4.177L36.369,49l1.239.431s-1.093-9.018-2.083-10.6S34.172,37.1,34.172,37.1Z' transform='translate(-10.279 -9.584)' fill='%23c2f9ff'/%3E%3Cpath d='M19.2,38.819s-6.53.149-8.55,2.331,2.006,14.518,2.006,14.518S24.823,70.574,30.91,71.625c0,0,2.661.363,3.9.383,0,0-1.218-3.545,1.047-5.77,0,0-2.607-.729-2.714-1.053S19.2,38.819,19.2,38.819Z' transform='translate(-8.86 -9.686)' fill='%2324a8d8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
            alt=""
          />
        </div>
        <div className="customerCare__content">
          <div className="customerCare__switchboard">
            <p className="customerCare__switchboard--text">Tổng đài CSKH</p>
            <a
              href="tel:1900571248"
              className="customerCare__switchboard--phone"
            >
              1900571248
            </a>
          </div>
          <div className="customerCare__border"></div>
          <div className="customerCare__introduce">
            <span className="customerCare__introduce--text">
              Tài khoản trung tâm Chăm sóc khách hàng
            </span>
            <a
              className="customerCare__introduce--link"
              href="https://www.hahalolo.com/u/chamsockhachhang"
            >
              https://www.hahalolo.com/u/chamsockhachhang
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CustomerCare;
