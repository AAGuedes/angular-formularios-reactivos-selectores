import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm: FormGroup = this.formBuilder.group({
    region: [ '', Validators.required ],
    country: [ '', Validators.required ],
    border: [ '', Validators.required ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      tap(() => this.borders = []),
      switchMap((region) => this.countriesService.getCountriesByRegion(region)),
    ).subscribe(countries => {
      this.countriesByRegion = countries.sort((country1: SmallCountry, country2: SmallCountry) => country1.name > country2.name ? 1 : -1);
    });
  }

  onCountryChanged(): void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('border')!.setValue('')),
      switchMap((alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap((country) => this.countriesService.getCountryBordersByCodes(country.borders))
    ).subscribe(countries => {
      this.borders = countries.sort((country1: SmallCountry, country2: SmallCountry) => country1.name > country2.name ? 1 : -1);
    })
  }
}
