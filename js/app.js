var app = angular.module('plunker', []);

app.controller('MainController', function() {
  this.totalEarnings = {
    totalTip: 0,
    mealCount: 0,
    averageTipPerMeal: 0
  }
  
  this.customerCharges = {
    subtotal: 0,
    tip: 0,
    total: 0
  }
  
  this.submit = function() {
    // this.updateCustomerCharges()
    this.customerCharges.subtotal = ((this.myform.taxRate / 100) * this.myform.baseMealPrice) + this.myform.baseMealPrice
    this.customerCharges.tip = ((this.myform.tipPercentage / 100) * this.myform.baseMealPrice)
    this.customerCharges.total = this.customerCharges.subtotal + this.customerCharges.tip
    
    // this.updateTotalEarnigs()
    this.totalEarnings.totalTip = this.totalEarnings.totalTip + this.customerCharges.tip
    this.totalEarnings.mealCount = this.totalEarnings.mealCount + 1 
    this.totalEarnings.averageTipPerMeal = this.totalEarnings.totalTip / this.totalEarnings.mealCount
  }

  this.clear = function clear(){
    this.myform = this.totalEarnings
  }
  this.submit = function submit(){
    this.myform = this.totalEarnings
  }

});
