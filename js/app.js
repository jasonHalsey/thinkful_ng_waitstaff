var app = angular.module('waitwait', [])
  app.controller('meal_controller', function(){
    var vm = this;
    vm.title = "Meal Controller";
    vm.value = meal.myform.base_meal_price;
  });
  app.controller('charges_controller', function(){
    var vm = this;
    vm.title = "Charges Controller";
  });
  app.controller('earnings_controller', function(){
    var vm = this;
    vm.title = "Earnings Controller";
  });