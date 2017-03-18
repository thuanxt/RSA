import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Residence } from './residence.model';

@Injectable()
export class ResidenceService {

	constructor(private http: Http) { }

	getList(): Observable<Residence[]> {
		return this.http.get('/api/residence').map(res => res.json().data as Residence[]);
	}
}