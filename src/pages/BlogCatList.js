import React, { useEffect } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogCategories } from '../features/blogCategory/blogCategorySlice';

const BlogCatList = () => {
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
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getBlogCategories());
      }, [dispatch]);
      const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories);
      const data = [];
      for (let i = 0; i < blogCategoryState.length; i++) {
        data.push({
          key: i + 1,
          title: blogCategoryState[i].title,
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
          <h3 className="mb-4 title">Blog Category List</h3>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      );
}

export default BlogCatList