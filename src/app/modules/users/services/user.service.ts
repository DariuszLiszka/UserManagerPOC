import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";
  limit = "?_limit=10";

  inMemoryResources: User[] = [];

  constructor(private _http: HttpClient) {}

  async getUsers() {
    const doApiCall: boolean = this.inMemoryResources.length === 0;

    if (doApiCall === true) {
      const apiUsers = await this._http.get<User[]>(`${this.apiUrl}${this.limit}`).toPromise();

      this.inMemoryResources = apiUsers;
    }

    return this.inMemoryResources;
  }

  async changeUserData(user: User) {
    const url = `${this.apiUrl}/${user.id}`;

    const changedUser: User = await this._http.put<User>(url, user, httpOptions).toPromise();

    const idx: number = this.inMemoryResources.findIndex(resource => resource.id === user.id);

    this.inMemoryResources[idx] = changedUser;

    return changedUser;
  }

  async deleteUser(user: User) {
    const url = `${this.apiUrl}/${user.id}`;

    const response =  await this._http.delete(url, httpOptions).toPromise();

    this.inMemoryResources = this.inMemoryResources.filter(resource => resource.id !== user.id);

    return response;
  }

  async addUser(user: User) {
    const addedUser = await this._http.post<User>(this.apiUrl, user, httpOptions).toPromise();

    this.inMemoryResources.push(addedUser);

    return addedUser;
  }
}
