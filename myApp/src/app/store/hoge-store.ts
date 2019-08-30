import { Injectable } from '@angular/core';

// Dependency injection prohibited
@Injectable({
  providedIn: 'root',
})
export class HogeStore {
  title: string;
  body: string;
}
