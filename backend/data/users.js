import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin User",
    email: "admin@prillare.pe",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: "Ale Chaufa",
    email: "alechaufa@gmail.com",
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: "Sophia Blink",
    email: "sophiablink@gmail.com",
    password: bcrypt.hashSync('123456', 10)
  },
];

export default users;