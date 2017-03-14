import { TestBed, inject } from '@angular/core/testing';

import { ResidenceThumbnailComponent } from './residence-thumbnail.component';

describe('a residence-thumbnail component', () => {
	let component: ResidenceThumbnailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ResidenceThumbnailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResidenceThumbnailComponent], (ResidenceThumbnailComponent) => {
		component = ResidenceThumbnailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});