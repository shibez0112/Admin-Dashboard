import React, { useEffect } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBrands } from '../features/brand/brandSlice';

const BrandList = () => {
    const columns = [
        {
          title: "SNo",
          dataIndex: "key",
        },
        {
          title: "Title",
          dataIndex: "title",
          sorter: (a, b) => a.title.length - b.title.length,
        },
        {
          title: "Action",
          dataIndex: "action",
        },
      ];
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getBrands());
      }, [dispatch]);
      const brandState = useSelector((state) => state.brand.brands);
      const data = [];
      for (let i = 0; i < brandState.length; i++) {
        data.push({
          key: i + 1,
          title: brandState[i].title,
          action: (
            <>
              <Link className="fs-3 text-danger" to={"/"}>
                <BiEdit />
              </Link>
              <Link className="ms-3 fs-3 text-danger" to={"/"}>
                <AiFillDelete />
              </Link>
            </>
          ),
        });
      }
      return (
        <div>
          <h3 className="mb-4 title">Brands</h3>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      );
}

export default BrandList