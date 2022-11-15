$(document).ready(function() {
  const viewModel = 
    { 
      firstName: ko.observable("Malcolm"), 
      lastName: ko.observable("Wilkie"), 
      capitalizeLastName: function() {
        const currentVal = this.lastName();       
        this.lastName(currentVal.toUpperCase()); 
      },
      removeCapsLastName: function() {
        const currentVal=this.lastName();
        this.lastName(currentVal.toLowerCase())
      }
      
    };
  
  viewModel.fullName = ko.computed(function(){return this.firstName() + " " + this.lastName()}, viewModel);
  
  // Activates knockout.js
  ko.applyBindings(viewModel);
});