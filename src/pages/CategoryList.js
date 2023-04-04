import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProdCategories } from "../features/prodCategory/prodCategorySlice";

const CategoryList = () => {
  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProdCategories());
  }, [dispatch]);
  const categoryState = useSelector(
    (state) => state.prodCategory.prodCategories
  );
  for (let i = 0; i < categoryState.length; i++) {
    data.push({
      key: i,
      title: categoryState[i].title,
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
      <h3 className="mb-4 title">Product Category</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default CategoryList;
