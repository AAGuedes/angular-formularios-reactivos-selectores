import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interfaces';


@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    region: [ '', Validators.required ],
    country: [ '', Validators.required ],
    borders: [ '', Validators.required ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService,
  ) {}

  get regions(): Region[] {
    return this.countriesService.regions;
  }
}
