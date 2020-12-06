import { Injectable } from '@angular/core';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}
  // Get all docs
  getCollection<T>(collection: string): Observable<T[]> {
    return this.firestore.collection<T>(collection).valueChanges();
  }
  // Get doc
  getDocument<T>(collection: string, id: string): Observable<T> {
    return this.firestore.doc<T>(`/${collection}/${id}`).valueChanges();
  }
  // Create doc
  newDocument<T>(collection: string, data: T): Promise<any> {
    return this.firestore.collection(collection).add(data);
  }
  // Create or update doc
  setDocument<T>(collection: string, id: string, data: T): Promise<void> {
    return this.firestore.doc<T>(`/${collection}/${id}`).update(data);
  }
  // Destroy doc
  destroyDocument<T>(collection: string, id: string): Promise<void> {
    return this.firestore.doc<T>(`/${collection}/${id}`).delete();
  }
}
