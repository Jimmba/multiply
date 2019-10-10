module.exports = function multiply(first, second) {
  // your solution
  let sum="", stack="", totalSum="";

  first=reverse(first);
  second=reverse(second);
  //console.log("К-во циклов - " + first.length +"\n");
  for (i=0; i<first.length; i++){
    //console.log("ЦИКЛ - " + (i+1));
    sum=simpleMultiply(first[i], second, i);
    //console.log("after simpleMultiply - " + i);
    totalSum=simpleSum(stack, sum);
    //console.log("after simpleSum - " + i);
    stack=totalSum;
    //console.log("ПРОЙДЕНО ЦИКЛОВ - " + (i+1) + "\n");
  }
  //console.log("finished stack - " + stack);
  return reverse(stack);
}

function reverse(str){
  //console.log("переворачиваем "+str);
  //console.log("длина строки " + str.length);
  let s="";
  for (i=0; i<str.length; i++){
    //console.log("цифра " + str[i]);
    s+=str[str.length-1-i];
  }
  //console.log("переворачиваем " + str + " - " + s);
  return s;
}

function simpleMultiply(simpleNumber, number, zeroesCount){
  let savedNumber=0,
    lastNumber=0,
    sum="";

  //console.log("Function simpleMultiply:\n" + "simpleNumber - " + simpleNumber, "\nnumber - " + number, " \nzeroesCount - " + zeroesCount);
  for (t=0; t<number.length; t++){
    simpleM=simpleNumber*number[t]+savedNumber;
    lastNumber= simpleM % 10;
    //console.log("lastNumber " + lastNumber);
    savedNumber = Math.floor(simpleM/10);
    //console.log("savedNumber " + savedNumber);
    sum+=lastNumber;
  }
  if (savedNumber!=0){
    sum+=savedNumber;
  }
  //console.log("sum " + sum + ", zeroes add - " + zeroesCount);
  for (t=0; t<zeroesCount; t++){
    sum="0" + sum;
  }
  //console.log("result - " + sum);
  return sum;
}

function simpleSum(str, sMulty){
  let s = "",
    stack="",
    sum=0,
    savedNumber=0;
    //console.log("Function simpleSum:\n " +  "str - " + str, "\n sMulty - " + sMulty);

  for(k=0; k<sMulty.length; k++){
    if (str.length < k+1){
      s=(+sMulty[k])+savedNumber;
        //console.log("s = " +s);
      if (s<10){
        stack+=s;
        savedNumber=0;
      }else{
        stack+=(s-10);
      }
    }else{
      sum=(+str[k])+(+sMulty[k])+savedNumber;
      //console.log("Прибавляем " +str[k] + " и " + sMulty[k] + " и " + savedNumber);
      //console.log("Сумма = " + sum);
      if (sum>9){
        sum-=10;
        savedNumber=1;
      }else{
        savedNumber=0;
      }
      stack+=sum;
    }
    //console.log("stack = " +stack);
  }
  if(savedNumber!=0){
    stack+=savedNumber;
  }
  //console.log("result stack: " +  stack +"\n");
  return stack;
}
