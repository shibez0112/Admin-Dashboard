import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
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
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.cagtegory.length,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productState = useSelector((state) => state.product.products);
  const data = [];
  for (let i = 0; i < productState.length; i++) {
    data.push({
      key: i + 1,
      title: productState[i].title,
      price: productState[i].price,
      brand: productState[i].brand,
      category: productState[i].category,
      quantity: productState[i].quantity,
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
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ProductList;
