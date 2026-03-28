// import React, { useEffect, useState } from "react";
// import { Table, Button, Spin } from "antd";
// import moment from "moment";
// import Layout from "../../components/Layout";
// import booking from "../../apiManger/booking";

// const Booking = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("upcoming"); // 'upcoming' or 'past'

//   const fetchBookings = async () => {
//     setLoading(true);
//     const res = await booking.getMentorBookings();
//     setBookings(res?.data?.bookings);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const handlePayNow = (bookingId) => {
//     // handle payment logic for the booking
//   };

//   // Filter bookings based on active tab
//   const filteredBookings = bookings.filter((booking) => {
//     if (activeTab === "upcoming") {
//       return moment(booking.dateAndTime).isAfter(moment()); // Future bookings
//     } else {
//       return moment(booking.dateAndTime).isBefore(moment()); // Past bookings
//     }
//   });

//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "dateAndTime",
//       key: "dateAndTime",
//       render: (text) => moment(text).format("DD MMM YYYY, hh:mm A"),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//       render: (price) => `₹${price}`,
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text, record) =>
//         record.status === "pending" ? (
//           <Button type="primary" onClick={() => handlePayNow(record._id)}>
//             Pay Now
//           </Button>
//         ) : null,
//     },
//   ];

//   return (
//     <Layout>
//       <div className="container p-4 mx-auto">
//         <h2 className="text-2xl font-bold">Your Bookings</h2>
//         <div className="flex my-4 space-x-4">
//           <Button
//             type={activeTab === "upcoming" ? "primary" : "default"}
//             onClick={() => setActiveTab("upcoming")}
//           >
//             Upcoming Bookings
//           </Button>
//           <Button
//             type={activeTab === "past" ? "primary" : "default"}
//             onClick={() => setActiveTab("past")}
//           >
//             Past Bookings
//           </Button>
//         </div>

//         {loading ? (
//           <Spin size="large" />
//         ) : (
//           <Table
//             columns={columns}
//             dataSource={filteredBookings}
//             pagination={{ pageSize: 5 }}
//             rowKey={(record) => record._id}
//           />
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Booking;

import React, { useEffect, useState } from "react";
import { Table, Button, Spin } from "antd";
import moment from "moment";
import Layout from "../../components/Layout";
import booking from "../../apiManger/booking";

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

  const handlePayNow = (bookingId) => {
    // handle payment logic for the booking
    console.log("Pay now:", bookingId);
  };

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
      key: "dateAndTime",
      render: (text) => moment(text).format("DD MMM YYYY, hh:mm A"),
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
    {
      title: "Action",
      key: "action",
      render: (_, record) =>
        record.status === "pending" ? (
          <Button type="primary" onClick={() => handlePayNow(record._id)}>
            Pay Now
          </Button>
        ) : null,
    },
  ];

  return (
    <Layout>
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
              scroll={{ x: 600 }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Booking;
