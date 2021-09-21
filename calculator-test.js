
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 12000,
    years: 12,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('45.00');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15000,
    years: 12,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('56.25');
});

it('should handle terribly high interest rates', function(){
  const values = {
    amount: 15000,
    years: 12,
    rate: 80
  };
  expect(calculateMonthlyPayment(values)).toEqual('1000.00')
});
