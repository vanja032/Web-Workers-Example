var a, b, c, unit1, unit2, unit3;
class Test{
  constructor(){
    if (typeof(Worker) !== "undefined") {
      if (typeof(a) == "undefined" && typeof(b) == "undefined" && typeof(c) == "undefined") {
          a = new Worker("function.js");
          b = new Worker("function.js");
          c = new Worker("function.js");
      }
      a.onmessage = function(event){
          this.value = event.data;
          console.log(this.value);
      };
      b.onmessage = function(event){
        this.value = event.data;
        console.log(this.value);
      };
      c.onmessage = function(event){
        this.value = event.data;
        console.log(this.value);
      };
    } else {
      // Sorry! No Web Worker support..
    }
  }
}
var test = new Test();