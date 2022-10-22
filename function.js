class TestUnit{
    constructor(unit){
      this.value = unit;
      for(var i=0;i<100000;i++)
      {
      i = i+1;
      }
      console.log(new Date().getTime());
    }
  }
var unit = new TestUnit("BB!");