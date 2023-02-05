import { I_User } from '../components/App.interface';

export const getSide = () => typeof window === "undefined" ? "server" : "client";

const UsersDB: I_User[] = [{
  _id: 'dfsf',
  id: 1,
  name: 'Ivan',
  gender: 1,
  created: new Date().toDateString()
}, {
  _id: 'dfsf44',
  id: 2,
  name: 'Vasya',
  gender: 1,
  created: new Date().toDateString()
}, {
  _id: 'dfsf344',
  id: 3,
  name: 'Stepan',
  gender: 1,
  created: new Date().toDateString()
}, {
  _id: 'd4fsf344',
  id: 4,
  name: 'Feodor',
  gender: 1,
  created: new Date().toDateString()
}];

export const clientUsersDB: I_User[] = [{
  _id: 'dfsf',
  id: 1,
  name: 'Ivan',
  gender: 1,
  created: new Date().toDateString()
}];

export default UsersDB;