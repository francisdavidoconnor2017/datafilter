import React from 'react';
import {Table} from 'antd';
import InnerDiv from './styles/InnerDiv';

const columns = [
  {
    title: 'key',
    dataIndex: 'index',
    key: 'key'
  }, {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'spend'
  }, {
    title: 'Birth Month',
    dataIndex: 'birthmonth',
    key: 'birthmonth'
  }, {
    title: 'Address',
    dataIndex: 'region',
    key: 'region'
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  }
];

const Tabulate = ({data}) => {
  return (
    <InnerDiv>
      <Table columns={columns} dataSource={data}/>
    </InnerDiv>
  );
}

export default Tabulate;
