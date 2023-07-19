const express = require ("express")
const app = express();

app.use(express.json());

//Rooms database
const rooms = [
  {
    name: "Super-Deluxe",
    seats: 100,
    amenities: "Air Conditioning, AV Equipments, Free Wi-Fi, Large Podium",
    price: 5000,
    room_id: "10050001",
    bookingDetails: [
      {
        customer_name: "Srikanth",
        date: "03/06/2023",
        start: "10:00",
        end: "14:00",
        status: "Confirmed",
      },
    ],
  },
  {
    name: "Premium",
    seats: 150,
    amenities: "Air Conditioning, AV Equipments, Free Wi-Fi, Large Podium",
    price: 7500,
    room_id: "15075002",
    bookingDetails: [
      {
        customer_name: "Ajith S",
        date: "10/08/2023",
        start: "11:00",
        end: "15:00",
        status: "Payment Pending",
      },
    ],
  },
];

//common call api status
app.get("/", (req, res) => {
  res.status(200).send("Hall Booking API by Srikanth is running successfully!");
});

//create a room with no_of_seats, amenities, price_per_hour
app.post("/create-room", (req, res) => {
  rooms.push({
    name: req.body.name,
    seats: req.body.seats,
    amenities: req.body.amenities,
    price: req.body.price,
    room_id: `${req.body.seats}${req.body.price}${rooms.length + 1}`,
    bookingDetails: [{}],
  });
  res.send(rooms);
});

//Booking a room with customer_name, Date, Start_Time, End_Time, Room_Id 
//new one post book room 
app.post("/book-room", (req, res) => {
  const { customer_name, date, start, end, room_id } = req.body;

  // Find the room with the given room ID
  const room = rooms.find((room) => room.room_id === room_id);

  // If the room exists, create a new booking and add it to the bookingDetails array
  if (room) {
    const booking = {
      customer_name,
      date,
      start,
      end,
      status: "Confirmed", // Assuming the booking is always confirmed upon creation
    };

    room.bookingDetails.push(booking);

    console.log("Booking successful!");
    res.status(200).send("Booking successful!");
  } else {
    console.log("Room not found. Booking failed.");
    res.status(404).send("Room not found. Booking failed.");
  }
});
    
//list customers with Booked Data with Room_name, Booked_status, Date, Start_Time and End_Time

app.get("/list-customer", (req, res) => {
  let customer_list = [];

  rooms.forEach((room) => {
    let customer_det = { room_name: room.name };

    room.bookingDetails.forEach((customer) => {
      customer_det.customer_name = customer.customer_name;
      customer_det.date = customer.date;
      customer_det.start = customer.start;
      customer_det.end = customer.end;

      customer_list.push(customer_det);
    });
  });

  res.send(customer_list);
});

//list all rooms with Booked data with Customer_name, Room_name, Date, Start_Time and End_Time

app.get("/booked-rooms", (req, res) => {
  console.log("list rooms");
  res.status(200).send(rooms);
});

app.get("/", (req, res) => {
  console.log("Hall Booking API by Srikanth is running successfully");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});

