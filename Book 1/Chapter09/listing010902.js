class Coffee extends Beverage {
  constructor(size, temperature, hasCaffiene, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffiene = hasCaffiene;
    this.howYouTakeIt = howYouTakeIt;
  }
}
