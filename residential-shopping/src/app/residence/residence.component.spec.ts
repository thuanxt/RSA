import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ResidenceComponent } from './residence.component';
import { ResidenceService } from './shared/residence.service';
import { Residence } from './shared/residence.model';

describe('a residence component', () => {
	let component: ResidenceComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ResidenceService, useClass: MockResidenceService },
				ResidenceComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ResidenceComponent], (ResidenceComponent) => {
		component = ResidenceComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original residence service
class MockResidenceService extends ResidenceService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
