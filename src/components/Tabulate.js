import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Original Index',
  dataIndex: 'index',
  key: 'index'
},
  {
  title: 'Spend',
  dataIndex: 'spend',
  key: 'spend'
}, {
  title: 'Birth Month',
  dataIndex: 'birthmonth',
  key: 'birthmonth',
}, {
  title: 'Address',
  dataIndex: 'region',
  key: 'region',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender'
}];

const Tabulate = ({data}) => {
    return(
    <Table columns={columns} dataSource={data} />
  );
}

export default Tabulate;
