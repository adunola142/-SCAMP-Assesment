var fibonacciSeries = function (num) 
{
  if (num===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var series = fibonacciSeries(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

 document.write(fibonacciSeries(10) + "<br>");
 document.write(fibonacciSeries(15) + "<br>");

