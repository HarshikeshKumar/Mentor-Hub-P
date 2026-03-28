import React from "react";
import { Table } from "antd";
import Dashboard from "./dashboard";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Payment = () => {
  const paymentHistory = [
    {
      key: "1",
      no: "1",
      studentName: "Jane Doe",
      transactionId: "TXN12345",
      date: "2024-10-15",
      amount: "₹50",
      status: "Completed",
    },
    {
      key: "2",
      no: "2",
      studentName: "Mark Smith",
      transactionId: "TXN67890",
      date: "2024-10-10",
      amount: "₹75",
      status: "Completed",
    },
    {
      key: "3",
      no: "3",
      studentName: "Anna Johnson",
      transactionId: "TXN24680",
      date: "2024-09-30",
      amount: "₹100",
      status: "Completed",
    },
    {
      key: "4",
      no: "4",
      studentName: "Emily Davis",
      transactionId: "TXN13579",
      date: "2024-09-25",
      amount: "₹60",
      status: "Completed",
    },
    {
      key: "5",
      no: "5",
      studentName: "Michael Brown",
      transactionId: "TXN86420",
      date: "2024-09-20",
      amount: "₹85",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={status === "Completed" ? "text-green-500" : "text-red-500"}
        >
          {status}
        </span>
      ),
    },
  ];

  return (
    <Dashboard>
      <div className="rounded-lg bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <MdOutlineCurrencyRupee className="text-2xl text-blue-600 sm:text-3xl" />
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Payment History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={paymentHistory}
            pagination={{
              pageSize: 3,
              showSizeChanger: false,
              pageSizeOptions: ["3", "5", "10"],
            }}
            scroll={{ x: 800 }}
            className="w-full"
          />
        </div>
      </div>
    </Dashboard>
  );
};

export default Payment;
