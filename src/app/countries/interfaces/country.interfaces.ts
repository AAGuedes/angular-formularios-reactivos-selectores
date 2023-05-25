export enum Region {
  Africa   = 'Africa',
  Americas = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania'
}

export interface Country {
  name:         Name;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  DKK?: All;
  FOK?: All;
  GBP?: All;
  IMP?: All;
  EUR?: All;
  HUF?: All;
  MDL?: All;
  CZK?: All;
  ALL?: All;
  MKD?: All;
  CHF?: All;
  RUB?: All;
  JEP?: All;
  BGN?: All;
  BYN?: All;
  PLN?: All;
  GIP?: All;
  NOK?: All;
  UAH?: All;
  SEK?: All;
  BAM?: BAM;
  GGP?: All;
  RSD?: All;
  RON?: All;
  ISK?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  dan?: string;
  fao?: string;
  eng?: string;
  glv?: string;
  deu?: string;
  cat?: string;
  swe?: string;
  sqi?: string;
  srp?: string;
  hun?: string;
  ron?: string;
  ces?: string;
  slk?: string;
  spa?: string;
  ita?: string;
  slv?: string;
  fra?: string;
  nld?: string;
  hrv?: string;
  mkd?: string;
  gsw?: string;
  roh?: string;
  ltz?: string;
  rus?: string;
  ell?: string;
  tur?: string;
  nrf?: string;
  fin?: string;
  est?: string;
  bul?: string;
  bel?: string;
  pol?: string;
  nor?: string;
  lit?: string;
  ukr?: string;
  cnr?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  de?:  string;
  bos?: string;
  mlt?: string;
  por?: string;
  nfr?: string;
  lav?: string;
  isl?: string;
  lat?: string;
  gle?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
