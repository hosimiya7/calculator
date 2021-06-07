$(document).ready(function () {

  const calc = new Calculator()

  $(".number").on("click", function () {
    calc.setInputedValue($(this).text())
  })

  $(".all_clear").on("click", () => {
    calc.allClear()
  })

  $(".dot").on("click", () => {
    calc.dot()
  })

  $(".return").on("click", () => {
    calc.return()
  })

  $(".plus").on("click", () => {
    calc.plus()
  })

  $(".minus").on("click", () => {
    calc.minus()
  })

  $(".multiple").on("click", () => {
    calc.multiple()
  })

  $(".division").on("click", () => {
    calc.division()
  })

  $(".equal").on("click", () => {
    calc.calclate()
  })

})

class Calculator {

  memory
  operator
  memory_array
  $input_number

  constructor() {
    this.resetMemory()
    this.$input_number = $("#input_number")
  }

  resetMemory = function () {
    this.memory = 0
    this.operator = ""
    this.memory_array = []
  }

  allClear = function () {
    this.resetNumber()
    this.resetMemory()
  }

  resetNumber = function () {
    this.$input_number.val("")
  }

  getInputedValue = function () {
    return this.$input_number.val()
  }

  setInputedValue = function (text) {
    this.$input_number.val(this.getInputedValue() + text)
  }

  dot = function () {
    this.decimalPoint()
  }

  return = function () {
    this.$input_number.val(this.getInputedValue().slice(0, -1))
  }

  decimalPoint = function () {
    if (Number(this.getInputedValue()) !== 0) {
      this.$input_number.val(this.getInputedValue() + ".")
    } else {
      this.$input_number.val(0 + ".")
    }
  }

  plus = function () {
    // this.calclate()
    // this.memory = Number(this.getInputedValue())
    this.memory_array.push(Number(this.getInputedValue()))
    this.operator = "+"
    this.memory_array.push(this.operator)
    this.resetNumber()
  }

  minus = function () {
    // this.calclate()
    // this.memory = Number(this.getInputedValue())
    this.memory_array.push(Number(this.getInputedValue()))
    this.operator = "-"
    this.memory_array.push(this.operator)
    this.resetNumber()
  }

  multiple = function () {
    // this.calclate()
    // this.memory_ = Number(this.getInputedValue())
    this.memory_array.push(Number(this.getInputedValue()))
    this.operator = "*"
    this.memory_array.push(this.operator)
    this.resetNumber()
  }

  division = function () {
    // this.calclate()
    // this.memory = Number(this.getInputedValue())
    this.memory_array.push(Number(this.getInputedValue()))
    this.operator = "/"
    this.memory_array.push(this.operator)
    this.resetNumber()
  }

  calclate = function () {
    
    this.memory_array.push(Number(this.getInputedValue()))
    console.log(this.memory_array)
    let array_length = this.memory_array.length

    const priority = {
      0: ["+", "-"],
      1: ["*", "/"],
    }
    // for(let count = 0; count <= array_length; count++){
      const is_exist_priority1 = this.memory_array.some(elem => priority[1].indexOf(elem))
      const is_exist_priority0 = this.memory_array.some(elem => priority[0].indexOf(elem))
      

      if(is_exist_priority1 === true){

        const priority_index = this.getOperatorIndex(priority[1])
        // console.log(priority_index)

        if(priority_index > 0){

          let operator = this.memory_array[priority_index]
          let operand_1 = this.memory_array[priority_index - 1]
          let operand_2 = this.memory_array[priority_index + 1]
          let ans = 0

        // なんで逆なの…
          if(operator = "*"){
            ans = operand_1 / operand_2
          }
          if(operator = "/"){
            ans = operand_1 * operand_2
          }
        
        this.memory_array.splice(priority_index - 1, 3)
        this.memory_array.splice(0, 0, ans)
        // console.log(this.memory_array)
        
        }
      }
      // 上のif分繰り返す

      if(is_exist_priority0 === true){

        const priority_index = this.getOperatorIndex(priority[0])
        // console.log(priority_index)

        if(priority_index > 0){

          let operator = this.memory_array[priority_index]
          let operand_1 = this.memory_array[priority_index - 1]
          let operand_2 = this.memory_array[priority_index + 1]
          let ans = 0

        // なんで逆なの…
          if(operator = "+"){
            ans = operand_1 + operand_2
          }
          if(operator = "-"){
            ans = operand_1 - operand_2
          }
        
        this.memory_array.splice(priority_index - 1, 3)
        this.memory_array.splice(0, 0, ans)
        // console.log(this.memory_array)
        
        }

      }
      // ifを繰り返す
      this.$input_number.text()
    
  

    // }
    // if (this.operator === "+") {
    //   this.$input_number.val(this.memory + Number(this.getInputedValue()))
    // }

    // if (this.operator === "-") {
    //   this.$input_number.val(this.memory - Number(this.getInputedValue()))
    // }

    // if (this.operator === "*") {
    //   this.$input_number.val(this.memory * Number(this.getInputedValue()))
    // }

    // if (this.operator === "/") {
    //   this.$input_number.val(this.memory / Number(this.getInputedValue()))
    // }

    this.resetMemory()
  }

  getOperatorIndex = function (operators) {
    let operatorIndex = this.memory_array.length
    operators.forEach(operator => {
      const index = this.memory_array.indexOf(operator)

      if(operatorIndex > index && index >= 0){
        operatorIndex = index
      }
    }) 
    return operatorIndex
  } 

}
