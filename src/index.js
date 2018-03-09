module.exports = function longestConsecutiveLength(array) {
  
  var array = array.sort(function(a, b) {
	return a - b;
});
  var length = 1;
  	  num = 1;
      if (array.length == 0) {
        return 0;
	}

  for (var i = 0; i < array.length-1; i++) {
    if((array[i]+1) == array[i+1]) {
    	num++;
    }else{
      if(length < num) {
      	length = num;
    }
      if(array[i] == array[i+1]);
      	else {
      		num = 1;
      	}
    }
  }
  return length;
}
