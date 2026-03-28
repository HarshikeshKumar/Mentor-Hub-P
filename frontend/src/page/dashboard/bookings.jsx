import React, { useEffect, useState } from "react";
import { Table, Button, Spin } from "antd";
import moment from "moment";
import booking from "../../apiManger/booking";
import Dashboard from "./dashboard";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await booking.getMentorBookings();
      setBookings(res?.data?.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((bookingItem) => {
    if (activeTab === "upcoming") {
      return moment(bookingItem.dateAndTime).isAfter(moment());
    } else {
      return moment(bookingItem.dateAndTime).isBefore(moment());
    }
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "dateAndTime",
      key: "date",
      render: (text) => moment(text).format("DD MMM YYYY"),
    },
    {
      title: "Time",
      dataIndex: "dateAndTime",
      key: "time",
      render: (text) => moment(text).format("hh:mm A"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price}`,
    },
  ];

  const rowClassName = (record) => {
    if (record.status === "pending") {
      return "bg-red-300";
    } else if (record.status === "confirmed") {
      return "bg-green-200";
    }
    return "";
  };

  return (
    <Dashboard>
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Your Bookings
        </h2>

        <div className="my-4 flex flex-wrap gap-3">
          <Button
            type={activeTab === "upcoming" ? "primary" : "default"}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Bookings
          </Button>

          <Button
            type={activeTab === "past" ? "primary" : "default"}
            onClick={() => setActiveTab("past")}
          >
            Past Bookings
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <Spin size="large" />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
            <Table
              columns={columns}
              dataSource={filteredBookings}
              pagination={{ pageSize: 5 }}
              rowKey={(record) => record._id}
              rowClassName={rowClassName}
              scroll={{ x: 700 }}
            />
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default Booking;
