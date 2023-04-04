import React, { useEffect } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from '../features/blogs/blogSlice';

const BlogList = () => {
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
          title: "Category",
          dataIndex: "category",
        },
        {
          title: "Action",
          dataIndex: "action",
        },
      ];
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getBlogs());
      }, [dispatch]);
      const blogState = useSelector((state) => state.blog.blogs);
      const data = [];
      for (let i = 0; i < blogState.length; i++) {
        data.push({
          key: i + 1,
          title: blogState[i].title,
          category: blogState[i].category,
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
          <h3 className="mb-4 title">Blog List</h3>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      );
}

export default BlogList