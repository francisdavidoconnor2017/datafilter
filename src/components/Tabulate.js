import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Key',
  dataIndex: 'key',
  key: 'key'
},
  {
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

class Tabulate extends Component {
  render(){
    return(
    <Table columns={columns} dataSource={this.props.data} />
  );
  }
}

export default Tabulate;
