import { Component, OnInit } from '@angular/core';

import { Residence } from '../shared/residence.model';
import { ResidenceService } from '../shared/residence.service';

@Component({
	selector: 'residence-list',
	moduleId: module.id,
	templateUrl: './residence-list.component.html',
	styleUrls: ['./residence-list.component.css']
})

export class ResidenceListComponent implements OnInit {

	public residences: Residence[]

	constructor(private residenceService: ResidenceService) { }

	ngOnInit() { 
		this.residenceService.getList().subscribe(
			residences => this.residences = residences
		)
	}
}