console.log("Hello World from Script.js");
//var age = prompt("Whats your age");
//alert(age + "years is" + age*365 + "days");
//var age = 20;//

//var age = prompt("Whats your age");
//parseInt(age);
//if (age<0) {
 //   alert("Can not add negative age ")
//}
//else if (age == 21) {
  //  alert("Happy 21s brithday");
//}
//else (age % 2 !=0)
//{
  //  alert ("Your age is odd");
//}
//var nr = -10;

//while (nr >= -11 && nr < 19){
  //  console.log(nr);
   // nr ++;
//}
//var count=-10;
//while(count>11 && count<41){
  //  if (count % 2 ==0)
    //console.log(count);}
    //count ++;
    
//function isEven(nr){
  //if (nr%2==0){return true}
  //else {return false}
//}
///console.log(isEven(5));

//var friends = ["charlie" , "sam" ,25  ,12];
//friends[1]
//friends.length-ne consol ne google
   //var person = {
     //name: "Bob",
     //age: 24,
     //city: "LA"
   //};
   //console.log(person.city);


$(document).ready(function(){
  Highcharts.chart('container', {
    
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 119931, 97031, 119931, 137133, 43934]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 119931, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 100000, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
  });