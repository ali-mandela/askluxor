import img from '../src/assets/testional.jpeg';  
 
export const reviews = [
    {
        id: 1,
        name: "John Doe",
        profession: "Software Engineer",
        review: "Excellent Excellent service and support. Highly recommend!Excellent service and " +
                "support. Highly recommend!Excellent service and support. Highly recommend! servi" +
                "ce and support. Highly recommend!",
        img: img,
        star: 3
    }, {
        id: 2,
        name: "Jane Smith",
        profession: "Graphic Designer",
        review: "Great experience, the team was very helpful and the end result was fantastic!",
        img: img,
        star: 4
    }, {
        id: 3,
        name: "Emily Johnson",
        profession: "Marketing Specialist",
        review: "Good value for money. Will definitely use their services again.",
        img: img,
        star: 2
    }, {
        id: 4,
        name: "Michael Brown",
        profession: "Project Manager",
        review: "Professional and reliable. The project was completed on time and exceeded expect" +
                "ations.",
        img: img,
        star: 4
    }, {
        id: 5,
        name: "Sarah Davis",
        profession: "Data Analyst",
        review: "The service was okay, but there were a few issues that needed to be addressed.",
        img: img,
        star: 3
    }
];

export const Agents = [
    { 
        id: 1,
        name: "John Doe",
        properties: 3,
        img: img 
    },
    {
        id: 2,
        name: "Jane Smith",
        properties: 5,
        img: img 
    },
    {
        id: 3,
        name: "Emily Johnson",
        properties: 2,
        img: img 
    },
    {
        id: 4,
        name: "Michael Brown",
        properties: 4,
        img: img 
    },
    {
        id: 5,
        name: "Sarah Davis",
        properties: 1,
        img: img 
    }
];

export const Properties = [
    {
        _id: "665d8b110e04eb3aa8d2d506",
        name: "Property 1",
        description: "PurchaseType",
        address: "New York",
        price: 250000,
        baths: 3,
        beds: 4,
        fullyFurbished: false,
        parkingSpot: true,
        type: "sell",
        image: "https://res.cloudinary.com/muhamad-ali/image/upload/v1717399178/upload_8f9f791bc282d3dd1d1640f8a8d5d428_xghgwi.jpg",
        agent: "665d6e6a32c038a0c9f7d60b",
        createdAt: "2024-06-03T09:21:21.854+00:00",
        updatedAt: "2024-06-03T09:21:21.854+00:00",
        __v: 0
    },
    {
        _id: "665d8b110e04eb3aa8d2d507",
        name: "Property 2",
        description: "PurchaseType",
        address: "Los Angeles",
        price: 350000,
        baths: 4,
        beds: 5,
        fullyFurbished: false,
        parkingSpot: true,
        type: "sell",
        image: "https://res.cloudinary.com/muhamad-ali/image/upload/v1717399178/upload_8f9f791bc282d3dd1d1640f8a8d5d428_xghgwi.jpg",
        agent: "665d6e6a32c038a0c9f7d60b",
        createdAt: "2024-06-03T09:21:21.854+00:00",
        updatedAt: "2024-06-03T09:21:21.854+00:00",
        __v: 0
    },
    {
        _id: "665d8b110e04eb3aa8d2d508",
        name: "Property 3",
        description: "PurchaseType",
        address: "Chicago",
        price: 180000,
        baths: 2,
        beds: 3,
        fullyFurbished: false,
        parkingSpot: true,
        type: "sell",
        image: "https://res.cloudinary.com/muhamad-ali/image/upload/v1717399178/upload_8f9f791bc282d3dd1d1640f8a8d5d428_xghgwi.jpg",
        agent: "665d6e6a32c038a0c9f7d60b",
        createdAt: "2024-06-03T09:21:21.854+00:00",
        updatedAt: "2024-06-03T09:21:21.854+00:00",
        __v: 0
    },
    {
        _id: "665d8b110e04eb3aa8d2d509",
        name: "Property 4",
        description: "PurchaseType",
        address: "Miami",
        price: 300000,
        baths: 5,
        beds: 6,
        fullyFurbished: false,
        parkingSpot: true,
        type: "sell",
        image: "https://res.cloudinary.com/muhamad-ali/image/upload/v1717399178/upload_8f9f791bc282d3dd1d1640f8a8d5d428_xghgwi.jpg",
        agent: "665d6e6a32c038a0c9f7d60b",
        createdAt: "2024-06-03T09:21:21.854+00:00",
        updatedAt: "2024-06-03T09:21:21.854+00:00",
        __v: 0
    },
];

// export const Properties = [
//     {
//         id: 1,
//         price: 250000,
//         location: "New York",
//         img: hotelImg,
//         features: ["Bedroom 4", "Parking", "Bathroom 3"]
//     },
//     {
//         id: 2,
//         price: 350000,
//         location: "Los Angeles",
//         img: hotelImg,
//         features: ["Bedroom 5", "Garden", "Bathroom 4"]
//     },
//     {
//         id: 3,
//         price: 180000,
//         location: "Chicago",
//         img: hotelImg,
//         features: ["Bedroom 3", "Garage", "Bathroom 2"]
//     },
//     {
//         id: 4,
//         price: 300000,
//         location: "Miami",
//         img: hotelImg,
//         features: ["Bedroom 6", "Swimming Pool", "Bathroom 5"]
//     },
//     {
//         id: 5,
//         price: 400000,
//         location: "San Francisco",
//         img: hotelImg,
//         features: ["Bedroom 4", "Ocean View", "Bathroom 3"]
//     },
//     {
//         id: 6,
//         price: 200000,
//         location: "Seattle",
//         img: hotelImg,
//         features: ["Bedroom 3", "Fireplace", "Bathroom 2"]
//     },
//     {
//         id: 7,
//         price: 280000,
//         location: "Austin",
//         img: hotelImg,
//         features: ["Bedroom 5", "Backyard", "Bathroom 4"]
//     },
//     {
//         id: 8,
//         price: 320000,
//         location: "Boston",
//         img: hotelImg,
//         features: ["Bedroom 4", "City View", "Bathroom 3"]
//     }
// ];

