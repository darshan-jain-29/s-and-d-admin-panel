import {Id} from './common.model';

export class UserModel implements Id {
  public id?: string;
  public uid: string;
  public displayName?: string;
  public email: string;
  public photoURL: string;
  public registerDate: string;
  public lastDate: string;
  public balance: number;

  constructor(model: any = {}) {
    this.id = model.id;
    this.uid = model.uid;
    this.displayName = model.displayName;
    this.email = model.email;
    this.photoURL = model.photoURL;
    this.lastDate = model.lastDate;
    this.registerDate = model.registerDate;
    this.balance = model.balance;
  }
}
