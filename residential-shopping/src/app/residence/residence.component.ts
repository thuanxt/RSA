import { Component, OnInit } from '@angular/core';

import { Residence } from './shared/residence.model';
import { ResidenceService } from './shared/residence.service';

@Component({
	selector: 'residence',
	moduleId: module.id,
	templateUrl: 'residence.component.html',
	providers: [ResidenceService]
})

export class ResidenceComponent implements OnInit {
	residence: Residence[] = [];

	constructor(private residenceService: ResidenceService) { }

	ngOnInit() {
		this.residenceService.getList().subscribe((res) => {
			this.residence = res;
		});
	}
}