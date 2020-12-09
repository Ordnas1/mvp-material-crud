import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  async setStorage(key: string, value: string | object): Promise<void> {
    const valueJson = JSON.stringify(value);
    await localStorage.setItem(key, btoa(valueJson));
  }

  async getStorage(key: string): Promise<string | object> {
    const response = localStorage.getItem(key) ?? btoa('{}');
    return await JSON.parse(atob(response));
  }
}
