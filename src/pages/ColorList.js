import React from 'react'
import { Table } from "antd";

const ColorList = () => {
    const columns = [
        {
          title: "SNo",
          dataIndex: "key",
        },
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Product",
          dataIndex: "product",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
      ];
      const data1 = [];
      for (let i = 0; i < 46; i++) {
        data1.push({
          key: i,
          name: `Edward King ${i}`,
          product: 32,
          status: `London, Park Lane no. ${i}`,
        });
      }
      return (
        <div>
          <h3 className="mb-4">Colors</h3>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      );
}

export default ColorList