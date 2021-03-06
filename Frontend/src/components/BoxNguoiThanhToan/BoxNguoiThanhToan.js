import React, { useState, useContext, useRef } from 'react';
import BoxMaDienThoai from './ChildComponent/BoxMaDienThoai';
import BoxQuocGia from './ChildComponent/BoxQuocGia';
import BoxTinhThanh from './ChildComponent/BoxTinhThanh';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './boxNguoiThanhToan.css';

const BoxNguoiThanhToan = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showMaDienThoai, setShowMaDienThoai] = useState(false);
  const [showQuocGia, setShowQuocGia] = useState(false);
  const [showTinhThanh, setShowTinhThanh] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [name, setName] = useState(props.paymentInfo.name);
  const [email, setEmail] = useState(props.paymentInfo.email);
  const [phone, setPhone] = useState(props.paymentInfo.phone);
  const [address, setAddress] = useState(props.paymentInfo.address);

  const [national, setNational] = useState(props.paymentInfo.nation);
  const [province, setProvince] = useState(props.paymentInfo.state);

  const [phoneCode, setPhoneCode] = useState({
    id: 5,
    imgNational: 'https://media.hahalolo.com/other/flags/vn.png',
    nation: 'Vietnam',
    code: '+84',
  });

  const onNameChange = (e) => {
    props.setPaymentInfo((prevState) => ({
      ...prevState,
      name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
    }));
  };

  const getValueNational = (e) => {
    props.setPaymentInfo((prevState) => ({
      ...prevState,
      nation: e,
    }));
    return setNational(e), setProvince('');
  };
  const getValueProvince = (e) => {
    props.setPaymentInfo((prevState) => ({
      ...prevState,
      state: e,
    }));
    setProvince(e);
  };
  const getvaluePhoneCode = (e) => {
    setPhoneCode(e);
  };
  return (
    <div
      className={
        theme === 'dark'
          ? 'BoxNguoiThanhToan_container dark'
          : 'BoxNguoiThanhToan_container'
      }
    >
      <div>
        <h4 className='BoxNguoiThanhToan-title'>Th??ng tin ng?????i thanh to??n</h4>
        <div className='bntt-input-check'>
          <div className='input-checkbox'>
            <input type='checkbox' id='check' />
            <label className='label-checkbox' htmlFor='check'>
              S??? d???ng th??ng tin ng?????i li??n h???
            </label>
          </div>
        </div>
      </div>
      <div className='option1'>
        <div className='form-field'>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            onChange={(e) => onNameChange(e)}
            ref={firstNameRef}
          />
          <label htmlFor='name' className='form-label'>
            H???
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
        </div>
        <div className='form-field'>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            onChange={(e) => onNameChange(e)}
            ref={lastNameRef}
          />
          <label htmlFor='name' className='form-label'>
            T??n ?????m & t??n
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
        </div>
      </div>
      <div className='option2'>
        <div className='form-field email'>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            onChange={(e) =>
              props.setPaymentInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <label htmlFor='name' className='form-label'>
            Email
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
        </div>
        <div className='option3-1'>
          <div className='form-field madt'>
            <img className='img-madt' src={phoneCode.imgNational} alt='' />
            <div className='arrow-btn'>
              <svg
                onClick={() => setShowMaDienThoai((e) => !e)}
                className='arrow-icon'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M7 10l5 5 5-5z'></path>
              </svg>
            </div>
            <input
              type='text'
              className='form-input madt'
              placeholder=' '
              value={phoneCode.code}
              onChange={(e) => e}
            />
            <label htmlFor='name' className='form-label'>
              M?? ??i???n tho???i
              <span className='star'> *</span>
            </label>
            <span className='message-error'></span>

            <BoxMaDienThoai
              showMaDienThoai={showMaDienThoai}
              setShowMaDienThoai={setShowMaDienThoai}
              getvaluePhoneCode={getvaluePhoneCode}
            />
          </div>
          <div className='form-field'>
            <input
              type='text'
              className='form-input'
              placeholder=' '
              onChange={(e) =>
                props.setPaymentInfo((prevState) => ({
                  ...prevState,
                  phone: `${phoneCode.code} ${e.target.value}`,
                }))
              }
            />
            <label htmlFor='name' className='form-label'>
              S??? ??i???n tho???i
              <span className='star'> *</span>
            </label>
            <span className='message-error'></span>
          </div>
        </div>
      </div>
      <div className='option3'>
        <div className='form-field'>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            onChange={(e) =>
              props.setPaymentInfo((prevState) => ({
                ...prevState,
                address: e.target.value,
              }))
            }
          />
          <label htmlFor='name' className='form-label'>
            ?????a ch???
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
        </div>
      </div>
      <div className='option4'>
        <div className='form-field'>
          <div className='arrow-btn'>
            <svg
              onClick={() => setShowQuocGia((e) => !e)}
              className='arrow-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M7 10l5 5 5-5z'></path>
            </svg>
          </div>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            value={national}
            onChange={(e) =>
              props.setPaymentInfo((prevState) => ({
                ...prevState,
                nation: e.target.value,
              }))
            }
          />
          <label htmlFor='name' className='form-label'>
            Qu???c gia
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
          <BoxQuocGia
            showQuocGia={showQuocGia}
            setShowQuocGia={setShowQuocGia}
            getValueNational={getValueNational}
          />
        </div>
        <div className='form-field '>
          <input
            type='text'
            className='form-input '
            placeholder=' '
            onClick={() => setShowTinhThanh(true)}
            value={province}
            onChange={(e) =>
              props.setPaymentInfo((prevState) => ({
                ...prevState,
                state: e.target.value,
              }))
            }
          />
          <label htmlFor='name' className='form-label '>
            T???nh / Th??nh ph??? (Bang)
            <span className='star'> *</span>
          </label>
          <span className='message-error'></span>
          <BoxTinhThanh
            showTinhThanh={showTinhThanh}
            setShowTinhThanh={setShowTinhThanh}
            national={national}
            getValueProvince={getValueProvince}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxNguoiThanhToan;
