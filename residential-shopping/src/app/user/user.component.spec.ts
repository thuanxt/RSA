import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { UserComponent } from './user.component';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';

describe('a user component', () => {
	let component: UserComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: UserService, useClass: MockUserService },
				UserComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserComponent], (UserComponent) => {
		component = UserComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original user service
class MockUserService extends UserService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
