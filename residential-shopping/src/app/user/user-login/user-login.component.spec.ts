import { TestBed, inject } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';

describe('a user-login component', () => {
	let component: UserLoginComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserLoginComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserLoginComponent], (UserLoginComponent) => {
		component = UserLoginComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});