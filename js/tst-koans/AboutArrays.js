describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe('object'); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1,2,3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    expect(tenEmptyElementArray[7]).toBeUndefined();
    expect(tenEmptyElementArray[7]).not.toBeNull();

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
    
    expect(tenEmptyElementArray[7]).toBeUndefined();
    expect(tenEmptyElementArray[7]).not.toBeNull();
    
  });
  
  it("should understand a splitted string", function(){
    var someString = "Old mcdonals had a farm && ija ija aaah";
    var splittedString = someString.split("&&"); 
    
    expect(typeof(splittedString)).toEqual('object');
    expect(splittedString.length).toBeTruthy();
    expect(splittedString.length).toEqual(2);
    
    // The place where we split string is not part of the splitted array
    expect(splittedString[0].indexOf("&&")).toEqual(-1);
    expect(splittedString[1].indexOf("&&")).toEqual(-1);
    
    // White space is included in splitted strings
    expect(splittedString[0]).toEqual("Old mcdonals had a farm ");
    expect(splittedString[1]).toEqual(" ija ija aaah");
    expect(splittedString[0]).not.toEqual("Old mcdonals had a farm");
    expect(splittedString[1]).not.toEqual("ija ija aaah");
    
  });

  it("should slice arrays (the value is returned BUT the array is NOT changed)", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
    
    expect(array.slice(2)).toEqual(["and", "jelly"]);
    
    expect(array.slice(-2)).toEqual(["and", "jelly"]);
    expect(array.slice(-1)).toEqual(["jelly"]);
    
    expect(array).toEqual(["peanut", "butter", "and", "jelly"]);
    
  });
  
  it("should splice arrays (the value is returned AND the array IS changed)", function(){
    var array = ["Karl", "Henry", "Henrik", "Matteus"];
    
    expect(array.splice(0, 1)).toEqual(["Karl"]);
    expect(array.splice(-1)).toEqual(["Matteus"]);
    
    expect(array).toEqual(["Henry", "Henrik"]);
    
  });

//   it("should know array references", function () {
//     var array = [ "zero", "one", "two", "three", "four", "five" ];
// 
//     function passedByReference(refArray) {
//         refArray[1] = "changed in function";
//     }
//     passedByReference(array);
//     expect(array[1]).toBe(FILL_ME_IN);
// 
//     var assignedArray = array;
//     assignedArray[5] = "changed in assignedArray";
//     expect(array[5]).toBe(FILL_ME_IN);
// 
//     var copyOfArray = array.slice();
//     copyOfArray[3] = "changed in copyOfArray";
//     expect(array[3]).toBe(FILL_ME_IN);
//   });
// 
  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1,2,3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1,2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3,1,2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1,2]);
  });
});
