import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class UserService {

	constructor(private http: Http) { }

	getList(): Observable<User[]> {
		return this.http.get('/api/list').map(res => res.json() as User[]);
	}
}