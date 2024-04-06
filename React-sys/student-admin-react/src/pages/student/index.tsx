import { Button, Form, Space, Table, Input, TablePaginationConfig } from "antd";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StrudentQueryType } from "@/type/student";
import React from "react";

import styles from "./index.module.css";
import dayjs from "dayjs";
import { getStudentList } from "@/api/student";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    showSizeChanger: true,
    total: 0,
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await getStudentList({ current:1,pageSize:pagination.pageSize})
      const { data } = res
      setData(data)
    }
    fetchData()
  }, [])


  const handleStudentEdit = () => {
    router.push("student/edit/id");
  };

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination)
    const query = form.getFieldsValue()

    getStudentList({
      current: pagination.current,
      pageSize: pagination.pageSize,
      ...query
    })
  };



  const handleSearchFinish = (values: StrudentQueryType) => {
    const res = getStudentList(values)
    
   
  };


  const COlUMNS = [
    {
      title: "专业",
      dataIndex: "major",
      key: "major",
      align: "center"
    },
    {
      title: "年级",
      dataIndex: "grade",
      key: "grade",
      align: "center"
    },
    {
      title: "班级",
      dataIndex: "class",
      key: "class",
      align: "center"
    },
    {
      title: "学号",
      dataIndex: "student_number",
      key: "student_number",
      align: "center"
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
      align: "center"
    },
    {
      title: "出生日期",
      dataIndex: "date_of_birth",
      key: "date_of_birth",
      align: "center"
    },

    {
      title: "联系",
      dataIndex: "contact",
      key: "contact",
      align: "center"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      align: "center"
    },
    {
      title: "注册时间",
      dataIndex: "registration_date",
      key: "registration_date",
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
      align: "center"
    }
  ];

  const columns = [
    ...COlUMNS,
    {
      title: "操作",
      key: "action",
      render: (_: any, row: any) => {
        return (
          <Space>
            <Button type="link" onClick={handleStudentEdit}>
              编辑
            </Button>
            <Button type="link" danger>
              删除
            </Button>
          </Space>
        );
      },
      align: "center"
    },
  ];
  return (
    <>
      <Form
        name="search"
        form={form}
        onFinish={handleSearchFinish}
        initialValues={{
          student_number: "",
        }}
        style={{ width: "80%" }}
      >
        <Space>
          <Form.Item name="student_number" label="学号">
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Space>
      </Form>
      <div className={styles.tableWarp}>
        <Table
          rowKey={(record) => record.id}
          dataSource={data}
          columns={columns}
          onChange={handleTableChange}
          scroll={{ x: 1000 }}
          pagination={{
            ...pagination,
            showTotal: () => `共 ${pagination.total} 条`,
          }}
        />
      </div>
    </>
  );
}
