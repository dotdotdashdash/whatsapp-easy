export class LinkCreator {
  constructor(numberData) {
    this.unformattedNumber = numberData.nationalNumber;
    this.countryDialCode = numberData.countryCallingCode;
    this.valid = numberData.valid || false;
  }

  
}