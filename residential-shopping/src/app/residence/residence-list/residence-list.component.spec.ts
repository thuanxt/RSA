import { TestBed, inject } from '@angular/core/testing';

import { ResidenceListComponent } from './residence-list.component';

describe('a residence-list component', () => {
	let component: ResidenceListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResidenceListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResidenceListComponent], (ResidenceListComponent) => {
		component = ResidenceListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});