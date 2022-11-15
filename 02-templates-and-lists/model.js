$(document).ready(function() {
  // Raw catalog data - would come from the server
  const availableMeals = [
      { mealName: "Standard (sandwich)", price: 0 },
      { mealName: "Premium (lobster)", price: 34.95 },
      { mealName: "Ultimate (whole zebra)", price: 290 }
  ];
  
  // Class to represent a row in the reservations grid
    class seatReservation {
        constructor(name){
            this.name = name;
            this.availableMeals = availableMeals;
            this.meal = ko.observable(availableMeals[0]);
            this.remove = function() { viewModel.seats.remove(this) }
            this.formattedPrice = ko.computed(function() {
                let price = this.meal().price;
                return price ? "£" + price.toFixed(2) : "None";        
            }, this);
    }
  }
  
  // Overall viewmodel for this screen, along with initial state
  const viewModel = {
      seats: ko.observableArray([
          new seatReservation("Malcolm"),
          new seatReservation("Layla")
      ])
      ,addSeat: function() {
          this.seats.push(new seatReservation());   
      }
  };
  viewModel.totalSurcharge = ko.computed(function() {
     let total = 0;
     for (let i = 0; i < this.seats().length; i++)
         total += this.seats()[i].meal().price;
     return total;
  }, viewModel);
  
  ko.applyBindings(viewModel);
});