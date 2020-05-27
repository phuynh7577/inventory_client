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
            this.getBeer(), this.getWine(), this.getHardCider(), this.getMead(), this.getSaky(), 
            this.getGin(), this.getBrandy(), this.getWhiskey(), this.getRum(), this.getTequila(), 
            this.getVodka(), this.getEverclear(), this.getAbsinthe()
          ]
        }
      ]
    }
    return chartData
  }

  getBeer() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Beer")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getWine() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Wine")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getHardCider() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Hard Cider")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getMead() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Mead")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getSaky() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Saky")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getGin() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Gin")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getBrandy() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Brandy")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getWhiskey() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Whiskey")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getRum() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Rum")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getTequila() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Tequila")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getVodka() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Vodka")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getEverclear() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Everclear")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  getAbsinthe() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Absinthe")
    const itemTotal = item.length
    let newTotal = 0
    
    for (var i = 0; i < itemTotal; i++) {
      newTotal += item[i].qty
      // console.log(newTotal)
    }
    return newTotal
  }

  // bargraph ror
  rorBeer() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Beer")
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

  rorWine() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Wine")
    const itemTotal = item.length
    let totalPrice = 0
    let totalCost = 0
    let avgPrice = 0
    let avgCost = 0
    let ror = 0

    for (var i = 0; i < itemTotal; i++) {
      totalPrice += item[i].price_per_item
      avgPrice = totalPrice / itemTotal

      totalCost += item[i].total_cost / item[i].qty
      avgCost = totalCost / itemTotal    
    }

    ror = Math.ceil((((avgPrice - avgCost) / avgPrice) * 100) * 100) / 100
    console.log(ror)
    return ror
  }

  rorHardCider() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Hard Cider")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorMead() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Mead")
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
    console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorSaky() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Saky")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorGin() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Gin")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorBrandy() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Brandy")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorWhiskey() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Whiskey")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorRum() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Rum")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorTequila() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Tequila")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorVodka() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Vodka")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorEverclear() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Everclear")
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
    // console.log(ror)
    return Math.ceil(ror * 100) / 100
  }

  rorAbsinthe() {
    const item = this.props.userInfo.filter(inventory => inventory.category === "Absinthe")
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
    // console.log(ror)
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
            this.rorBeer(), this.rorWine(), this.rorHardCider(), this.rorMead(), this.rorSaky(), 
            this.rorGin(), this.rorBrandy(), this.rorWhiskey(), this.rorRum(), this.rorTequila(), 
            this.rorVodka(), this.rorEverclear(), this.rorAbsinthe()
          ]
        }
      ]
    }
    return chartData
  }


    render() {
        return (
            <div className="overview">
              {this.props.userInfo === null ? 
                <Redirect push to="/dashboard"/> 
                : 
                <>
                <div className="bar">
                  <Line
                    data={this.lineGraph()}
                    height= {250}
                    
                    options={{
                      maintainAspectRatio: false,
                      title:{
                        display:true,
                        text:'# of Inventories Added Per Liquor Type',
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
                    height= {250}
                    
                    options={{
                      maintainAspectRatio: false,
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