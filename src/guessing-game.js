class GuessingGame {
    constructor() {
      this.range = [];
    }
  
    setRange(min, max) {
      this.range = [min, max];
    }
  
    guess() {
      const [min, max] = this.range;
      if (min === max) {
        return min;
      } else if (min > max) {
        return -1;
      } else {
        return Math.ceil((min + max) / 2);
      }
    }
  
    lower() {
      const [min, max] = this.range;
      let mid = Math.ceil((min + max) / 2);
      this.range = [min, mid];
    }
  
    greater() {
      const [min, max] = this.range;
      let mid = Math.ceil((min + max) / 2);
      this.range = [mid, max];
    }
  }
  
  module.exports = GuessingGame;
  