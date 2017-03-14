import { Component, OnInit, Input } from '@angular/core';
import { Residence } from '../shared/residence.model';

@Component({
	selector: 'residence-thumbnail',
	moduleId: module.id,
	templateUrl: './residence-thumbnail/residence-thumbnail.component.html',
	styleUrls: ['./residence-thumbnail/residence-thumbnail.component.css']
})

export class ResidenceThumbnailComponent implements OnInit {
	@Input() residence : Residence;

	constructor() { }

	ngOnInit() { }
}