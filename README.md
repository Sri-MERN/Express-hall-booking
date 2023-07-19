# Express-hall-booking

1.* To create a room url as - http://localhost:8000/create-room,
  * In post man - POST - body - raw - json then a desired data for example the data given below,

{
  "name": "New Room",
  "seats": 50,
  "amenities": "Air Conditioning, AV Equipments, Free Wi-Fi",
  "price": 3000,
  "room_id": "20030001"
}
 * send - Then new room will be created ,The id should be differnt if we create multipe rooms,
 * if the creation is sucessful we can see data newly added in the endpoint.

2. * To book a room url as http://localhost:8000/book-room,
   * POST- body - raw - json then a required data for example the data given below

   {
  "customer_name": "Srikanth",
  "date": "09/09/2023",
  "start": "11:00",
  "end": "12:00",
  "room_id": "20030001"
}

* note- room_id should exist for booking as we have created rooms, anyother ids will throw error because the data will not  be present ,
* Send- This will success message if the data is added .

3.* To List customers url as http://localhost:8000/list-customer,
  * GET- send,
  * This will show the customers who has booked the rooms

4.*To see booked rooms url as http://localhost:8000/booked-rooms,
   GET - send,
   
   * The bookingDetails required will be displayed here
   [
    {
        "name": "Super-Deluxe",
        "seats": 100,
        "amenities": "Air Conditioning, AV Equipments, Free Wi-Fi, Large Podium",
        "price": 5000,
        "room_id": "10050001",
        "bookingDetails": [
            {
                "customer_name": "Srikanth",
                "date": "03/06/2023",
                "start": "10:00",
                "end": "14:00",
                "status": "Confirmed"
            },
            {
                "customer_name": "John Doe",
                "date": "08/20/2023",
                "start": "16:00",
                "end": "19:00",
                "status": "Confirmed"
            },
            {
                "customer_name": "10head",
                "date": "08/20/2023",
                "start": "16:00",
                "end": "19:00",
                "status": "Confirmed"
            }
        ]
    },
    {
        "name": "Premium",
        "seats": 150,
        "amenities": "Air Conditioning, AV Equipments, Free Wi-Fi, Large Podium",
        "price": 7500,
        "room_id": "15075002",
        "bookingDetails": [
            {
                "customer_name": "Ajith S",
                "date": "10/08/2023",
                "start": "11:00",
                "end": "15:00",
                "status": "Payment Pending"
            }
        ]
    },
    {
        "name": "New Room",
        "seats": 50,
        "amenities": "Air Conditioning, AV Equipments, Free Wi-Fi",
        "price": 3000,
        "room_id": "5030004",
        "bookingDetails": [
            {},
            {
                "customer_name": "mn",
                "date": "09/02/2023",
                "start": "11:00",
                "end": "12:00",
                "status": "Confirmed"
            },
            {
                "customer_name": "srikanth",
                "date": "01/09/2023",
                "start": "09:00",
                "end": "06:00",
                "status": "Confirmed"
            }
        ]
    },
    {
        "name": "Third eye",
        "seats": 90,
        "amenities": "Air Conditioning, AV Equipments, Free Wi-Fi, Top speed",
        "price": 9000,
        "room_id": "9090005",
        "bookingDetails": [
            {}
        ]
    }
]
* This is Json showing all the details.
* In render Build command - npm i --force


