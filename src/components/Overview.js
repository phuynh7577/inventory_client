import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'  
import {Bar, Line} from 'react-chartjs-2';

class Overview extends Component {

  lineGraph () {
    const chartData = {
      labels:[
        "Beer", "Wine", "Hard Cider", "Mead", "Saky", "Gin", "Brandy", 
        "Whiskey", "Rum", "Tequila", "Vodka", "Everclear", "Absinthe"
      ],
      datasets: [
        {
          // label: 'Rainfall',
          backgroundColor: [
            'rgba(75,192,192,1)'
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            this.getLiquorTotal("Beer"), this.getLiquorTotal("Wine"), this.getLiquorTotal("Hard Cider"), this.getLiquorTotal("Mead"), this.getLiquorTotal("Saky"), 
            this.getLiquorTotal("Gin"), this.getLiquorTotal("Brandy"), this.getLiquorTotal("Whiskey"), this.getLiquorTotal("Rum"), this.getLiquorTotal("Tequila"), 
            this.getLiquorTotal("Vodka"), this.getLiquorTotal("Everclear"), this.getLiquorTotal("Absinthe")
          ]
        }
      ]
    }
    return chartData
  }

  // Linegraph total # of inventories
  getLiquorTotal(type) {
    const item = this.props.userInfo.filter(inventory => inventory.category === type)
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }


  // bargraph ror
  rateOfReturn(type) {
    const item = this.props.userInfo.filter(inventory => inventory.category === type)
    const itemTotal = item.length
    let totalPrice = 0
    let totalCost = 0
    let avgPrice = 0
    let avgCost = 0
    let ror = 0
        
    for (var i = 0; i < itemTotal; i++) {
      totalPrice += item[i].price_per_item
      avgPrice = totalPrice / itemTotal

      totalCost += (item[i].total_cost / item[i].qty) 
      avgCost = totalCost / itemTotal    
    }

    ror = ((avgPrice - avgCost) / avgPrice) * 100
    return Math.ceil(ror * 100) / 100
  }

  barGraph () {
    const chartData = {
      labels:[
        "Beer", "Wine", "Hard Cider", "Mead", "Saky", "Gin", "Brandy", 
        "Whiskey", "Rum", "Tequila", "Vodka", "Everclear", "Absinthe"
      ],
      datasets: [
        {
          // label: 'Rainfall',
          backgroundColor: [
            'rgba(75,192,192,1)', "green", "purple", "black", "grey", "blue", "red", 
            "orange", "yellow", "maroon",  "rgba(192, 77,77,1)", 
            "rgba(192, 77,77,.5)", "pink"
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            this.rateOfReturn("Beer"), this.rateOfReturn("Wine"), this.rateOfReturn("Hard Cider"), this.rateOfReturn("Mead"), this.rateOfReturn("Saky"), 
            this.rateOfReturn("Gin"), this.rateOfReturn("Brandy"), this.rateOfReturn("Whiskey"), this.rateOfReturn("Rum"), this.rateOfReturn("Tequila"), 
            this.rateOfReturn("Vodka"), this.rateOfReturn("Everclear"), this.rateOfReturn("Absinthe")
          ]
        }
      ]
    }
    return chartData
  }

  // test () {
  //   let b = []
  //   let len = this.props.userInfo.length
  //   for(let i = 0; i < len; i++) {
  //     if(b.indexOf(this.props.userInfo[i].category) === -1) {
  //       b.push(this.props.userInfo[i].category)
  //     }
  //   }
  //   return b
  // }

    render() {
      // console.log(this.rateOfReturn("Wine"))
      // console.log(this.props.userInfo)
        return (
            <div className="overview">
              {this.props.userInfo === null ? 
                <Redirect push to="/dashboard"/> 
                : 
                <>
                <div className="bar">
                  <Line
                    data={this.lineGraph()}
                    // height= {250}
                    
                    options={{
                      maintainAspectRatio: true,
                      title:{
                        display:true,
                        text:'# of Inventories Per Liquor Type',
                        fontSize:20
                      },
                      legend:{
                        display:false,
                        position:'right'
                      }
                    }}
                  />
                </div>

                <div className="line">
                  <Bar
                    data={this.barGraph()}
                    // height= {250}
                    
                    options={{
                      maintainAspectRatio: true,
                      title:{
                        display:true,
                        text:'ROR Per Liquor Type(%)',
                        fontSize:20
                      },
                      legend:{
                        display:false,
                        position:'right'
                      }
                    }}
                  />
                </div>

                </>
                }
              

            </div>
          );
      }
    }

export default Overview;