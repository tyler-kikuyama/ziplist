
const testList1 = ['a','b','c'];
const testList2 = [1,2,3];

function zipList(list1, list2){
  let output = [];

  for(let i = 0; i<list1.length;i++){
    output.push(list1[i]);
    output.push(list2[i]);
  }
  return output;
}

console.log(zipList(testList1,testList2));


function zipListTheSimpleWay(list1,list2){
  let output=_.zip(list1,list2);
  return _.flatten(output);
}

console.log(zipListTheSimpleWay(testList1,testList2));