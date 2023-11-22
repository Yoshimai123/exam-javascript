function stringConcatenate(arr) {
    let concatenatedString = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().startsWith("a")) {
        concatenatedString += arr[i];
      }
    }
  
    if (concatenatedString.length > 10) {
      return concatenatedString.slice(0, 10);
    } else {
      return concatenatedString;
    }
  }
  
  const testArray = ["apple", "banana", "orange", 'Avocado', "grapes"];
  const result = stringConcatenate(testArray);
  console.log(result);