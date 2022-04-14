import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import Chart from 'react-apexcharts';

import { useSelector } from 'react-redux';

import StatusCard from '../../components/admin/StatusCard';

import Table from '../../components/admin/Table';

import Badge from '../../components/admin/Badge';

import statusCards from '../../assets/JsonData/status-card-data.json';

import './Dashboard.css';

const chartOptions = {
  series: [
    {
      name: 'Doanh thu',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: 'Chi phí',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ['Hành khách', 'Tổng số vé', 'Tổng số chi trả'],
  body: [
    {
      username: 'Phan Tiến Dũng',
      order: '5',
      price: '2.500.000 ₫',
    },
    {
      username: 'Lê Thanh Sơn',
      order: '4',
      price: '2.000.000 ₫',
    },
    {
      username: 'Nguyễn Văn Dũng',
      order: '3',
      price: '1.500.000 ₫',
    },
    {
      username: 'Dương Tuấn Anh',
      order: '2',
      price: '1.000.000 ₫',
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ['ID', 'Hành khách', 'Tổng chi phí', 'Ngày tạo', 'Trạng thái'],
  body: [
    {
      id: '#OD1713',
      user: 'Phan Tiến Dũng',
      date: '27 Jan 2022',
      price: '2.500.000 ₫',
      status: 'paid',
    },
    {
      id: '#OD1712',
      user: 'Lê Thanh Sơn',
      date: '26 Jan 2022',
      price: '2.000.000 ₫',
      status: 'paid',
    },
    {
      id: '#OD1711',
      user: 'Nguyễn Văn Dũng',
      date: '25 Jan 2022',
      price: '1.500.000 ₫',
      status: 'paid',
    },
    {
      id: '#OD1710',
      user: 'Dương Tuấn Anh',
      date: '24 Jan 2022',
      price: '1.000.000 ₫',
      status: 'paid',
    },
  ],
};

const orderStatus = {
  shipping: 'shipping',
  pending: 'warning',
  paid: 'success',
  refund: 'danger',
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className='page-header'>Bảng điều khiển</h2>
      <div className='row responsive'>
        <div className='col-6 statuscard'>
          <div className='row'>
            {statusCards.map((item, index) => (
              <div className='col-6' key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='col-6 chart-res'>
          <div className='page-card full-height'>
            {/* chart */}
            <Chart
              options={
                themeReducer === 'theme-mode-dark'
                  ? {
                      ...chartOptions.options,
                      theme: { mode: 'dark' },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: 'light' },
                    }
              }
              series={chartOptions.series}
              type='line'
              height='100%'
            />
          </div>
        </div>
        <div className='col-4 table1'>
          <div className='page-card'>
            <div className='page-card__header'>
              <h3>Hành khách mới nhất</h3>
            </div>
            <div className='page-card__body'>
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className='page-card__footer'>
              <Link to='/'>Xem tất cả</Link>
            </div>
          </div>
        </div>
        <div className='col-8 table2'>
          <div className='page-card'>
            <div className='page-card__header'>
              <h3>Hóa đơn mới nhất</h3>
            </div>
            <div className='page-card__body'>
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className='page-card__footer'>
              <Link to='/'>Xem tất cả</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
