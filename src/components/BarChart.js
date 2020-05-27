import React, { Component } from 'react';

class BarChart extends Component {
    

  render () {
    return (
      <>
        {/* <h4># of items per category</h4>
        <canvas id="items-per-category" width="150px" height="75px"></canvas> */}
      </>
    )
  }
}

export default BarChart







// preparedData = data => {
//     const barData = {
//       labels: ["Beer", "Wine", "Hard Cider", "Mead", "Saky", "Gin", "Brandy", "Whiskey", "Rum", "Tequila", "Vodka", "Everclear", "Absinthe"],
//       datasets: [{
//         label: "# of inventory per category",
//         data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         // fill: false,
//         // lineTension: 3,
//         // backgroundColor: "white",
//         // borderColor: "rgba(192, 77,77,1)",
//         // borderCapStyle: 'butt',
//         // borderDash: [],
//         // borderDashOffset: 0.0,
//         // borderJoinStyle: 'miter',
//         // pointBorderColor: "rgba(192, 77,77,1)",
//         // pointBackgroundColor: "#fff",
//         // pointBorderWidth: 1,
//         // pointHoverRadius: 5,
//         // pointHoverBackgroundColor: "rgba(192,77,77,1)",
//         // pointHoverBorderColor: "rgba(220,220,220,1)",
//         // pointHoverBorderWidth: 2,
//         // pointRadius: 1,
//         // pointHitRadius: 10,
//         // spanGaps: false,
//       }
//     ]
//     }
//     console.log(data)
//     console.log(barData)
//     // data.forEach(inventories => {
//     //   barData.datasets[0].data.push(inventories.category.length)
//     // })
//     return barData
//   }

//   createChart = (data) => {
//     const ctx = document.querySelector("#items-per-category")
//     const categoryChart = new Chart(ctx, {
//       type: 'bar',
//         data: data,
//         options: {
//           title:{
//             display:true,
//             text:'Average Rainfall per month',
//             fontSize:20
//           },
//           legend:{
//             display:true,
//             position:'right'
//           }
//         }   
//     })
//   }