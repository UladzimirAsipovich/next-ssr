import { makeAutoObservable } from "mobx";
import { I_User } from '../../components/App.interface';

export abstract class I_UsersStore {
  public UsersDB: I_User[];

  constructor() {
    this.UsersDB = [];
  }

  public abstract setUsers(users: I_User[]): void;
  public abstract hydrate(data: { users: I_User[] }): void;
  public abstract get viewAllUsers(): I_User[];
  public abstract get totalUsers(): number;
  public abstract addUser(user: I_User): void;
}

class UsersStore implements I_UsersStore {
  UsersDB: I_User[] = [];

  constructor() {
    this.UsersDB = [];
    makeAutoObservable(this);
  }

  setUsers = (users: I_User[]) => {
    this.UsersDB = users;
  };

  addUser = (user: I_User) => {
    this.UsersDB.push(user);
  };

  get viewAllUsers() {
    return this.UsersDB;
  }

  get totalUsers() {
    return this.UsersDB.length;
  }

  hydrate = (data: { users: I_User[] }) => {
    if (!data) return;
    this.setUsers(data.users);
  };
}

export default UsersStore;
