class Coffee extends Beverage {
  constructor(size, temperature, hasCaffiene, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffiene = hasCaffiene;
    this.howYouTakeIt = howYouTakeIt;
  }
  drink() {
    if (this.temperature != "scalding") {
      console.log("now drinking coffee");
    }
  }
}
