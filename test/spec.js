// write tests here
const chai = require(`chai`);
const scoreCalculator = require(`../index.js`);
const expect = chai.expect;
const should = chai.should();

describe('Score Calculator Input', function(){
  it('Should return "-1" with no argument', function(){
    let temp = scoreCalculator();
    expect(temp).to.equal(-1);
  });
  it ('Should only allow arguments to be Arrays', function(){
    let temp = scoreCalculator('blah de dah');
    expect(temp).to.equal(undefined);
  });
  it('Should only allow radius values between and including 1 and 20', function(){
    let temp = scoreCalculator([30,50,100]);
    expect(temp).to.equal(undefined);
  });
  it('Should allow radius collections to be any length', function(){
    let temp = scoreCalculator([1,1,10,3]);
    expect(temp).to.equal(15);
    temp = scoreCalculator([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(temp).to.equal(111);
  });
});

describe('Score Calculator Output', function(){
  it('Should add all radius values to determine score', function(){
    let temp = scoreCalculator([5, 10, 15, 8, 3]);
    expect(temp).to.equal(41);
  })
  it('Should award 100 point bonus if all radius are less than 5', function(){
    let temp = scoreCalculator([4, 2, 5, 3]);
    expect(temp).to.equal(114);
  });
});