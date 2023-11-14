const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
    city: 'New York',
    salary: 55000
  },
  {
    id: 2,
    name: 'Alice Smith',
    age: 22,
    email: 'alice.smith@example.com',
    city: 'Los Angeles',
    salary: 48000
  },
  {
    id: 3,
    name: 'Robert Johnson',
    age: 32,
    email: 'robert.johnson@example.com',
    city: 'Chicago',
    salary: 62000
  },
  {
    id: 4,
    name: 'Emily Wilson',
    age: 25,
    email: 'emily.wilson@example.com',
    city: 'San Francisco',
    salary: 58000
  },
  {
    id: 5,
    name: 'Michael Brown',
    age: 30,
    email: 'michael.brown@example.com',
    city: 'Miami',
    salary: 60000
  }
];


const TransformedData = users.map((user) => {
  const {id, age, name} = user
  const result = {id, age, name}

  return result
})

console.log(TransformedData)


const birtdayUsers = users.map((user) => {
  user.age += 1;

  return user;
})

console.log(birtdayUsers)

const birthYearUsers = users.map((user) => {
  user.birthday = 2023 -user.age
  return user;
})

console.log(birthYearUsers)


const userFromMiami = users.find((user) => user.city === "Miami")

console.log(userFromMiami)