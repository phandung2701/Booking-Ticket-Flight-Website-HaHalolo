import React, { Fragment, useState, useEffect, useContext } from 'react';

import Table from '../../components/admin/Table';
import UpdatePassenger from '../../components/admin/UpdatePassenger';

import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import ErrorModal from '../../shared/components/ErrorModal';
import axios from 'axios';
// import passengerList from '../../assets/JsonData/pasenger-list.json';
import './Passengers.css';

const Passengers = () => {
  const auth = useContext(AuthContext);

  const [passenger, setPassenger] = useState();
  const [error, setError] = useState(null);
  const clearError = () => {
    setError(null);
  };

  const [isLoading, setIsLoading] = useState(true);
  const triggerLoading = () => {
    setIsLoading(true);
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/passengers',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setPassenger(res.data);
        setIsLoading(false);
        setShowUpdate(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        setShowUpdate(false);
      });
  };

  const filterData = (idhanhkhach = null) => {
    setIsLoading(true);
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/passengers/search`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        IdHanhKhach: idhanhkhach,
      },
    })
      .then((res) => {
        setPassenger(res.data);
        setIsLoading(false);
        // setShowFilter(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        // setShowFilter(false);
      });
  };

  const [showUpdate, setShowUpdate] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({});
  const customerTableHead = [
    'ID',
    'H??? & T??n',
    'Gi???i T??nh',
    'Ng??y Sinh',
    'S???a Th??ng Tin',
    'X??a',
  ];

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: 'get',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/passengers',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => setPassenger(res.data))
        .catch((err) => setError(err.response.data.message));
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.IdHanhKhach}</td>
      <td>{item.HoTen}</td>
      <td>{item.GioiTinh}</td>
      <td>{item.NgaySinh}</td>
      <td>
        <span
          className='update-passenger'
          onClick={() => handlePassengerInfo(item)}
        >
          S???a
        </span>
      </td>
      <td>
        <span className='delete-passenger' onClick={() => HandleData2(item)}>
          X??a
        </span>
      </td>
    </tr>
  );

  const HandleData2 = (e) => {
    axios({
      method: 'delete',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/passengers/${e.IdHanhKhach}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        triggerLoading();
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handlePassengerInfo = (e) => {
    setPassengerInfo(e);
    setShowUpdate(true);
  };

  const onInputKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      filterData(e.target.value);
    }
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <UpdatePassenger
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        passengerInfo={passengerInfo}
        triggerLoading={triggerLoading}
        setError={setError}
      />
      <div>
        <h2 className='page-header'>Th??ng Tin Kh??ch H??ng</h2>
        <div className='row'>
          <div className='search-id'>
            <input
              className='admin-input'
              type='text'
              placeholder='Nh???p ID'
              onKeyUp={onInputKeyUp}
            />
            <i className='bx bx-search'></i>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='page-card'>
              <div className='page-card__body'>
                {isLoading && <LoadingSpinner />}
                {!isLoading && passenger && (
                  <Table
                    limit='10'
                    headData={customerTableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={passenger}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Passengers;
