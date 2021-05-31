$(document).ready(function(){

  const calc = new Calculator()

  const $input_number = $("#input_number")
  let memory = 0
  let operator = ""

  $(".number").on("click", function(){
    calc.setInputedValue($(this).text())
  })

  $(".all_clear").on("click", ()=>{
    calc.allClear()
  })

  $(".return").on("click", ()=>{
    calc.return()
  })

  $(".plus").on("click", ()=>{
    calc.plus()
  })

  $(".minus").on("click", ()=>{
    calc.minus()
  })

  $(".multiple").on("click", ()=>{
    calc.multiple()
  })

  $(".division").on("click", ()=>{
    calc.division()
  })

  $(".equal").on("click", ()=>{
    calc.calclate()
  })

})

class Calculator{

  memory
  operator
  $input_number

  constructor(){
    this.resetMemory()
    this.$input_number = $("#input_number")
  }
  resetMemory = function(){
    this.memory = 0
    this.operator = ""
  }
  allClear = function(){
    this.resetNumber()
    this.resetMemory()
  }
  resetNumber = function(){
    this.$input_number.val("")
  }
  getInputedValue = function(){
    return this.$input_number.val()
  }
  setInputedValue = function(text){
    this.$input_number.val(this.getInputedValue() + text)
  }
  return = function(){
    this.$input_number.val(this.getInputedValue().slice(0, -1))
  }

  plus = function(){
    this.memory = Number(this.getInputedValue())
    this.operator = "+"
    this.resetNumber()
  }

  minus = function(){
    this.memory = Number(this.getInputedValue())
    this.operator = "-"
    this.resetNumber()
  }

  multiple = function(){
    this.memory = Number(this.getInputedValue())
    this.operator = "*"
    this.resetNumber()
  }

  division = function(){
    this.memory = Number(this.getInputedValue())
    this.operator = "/"
    this.resetNumber()
  }

  calclate = function(){
    if(this.operator === "+"){
      this.$input_number.val(this.memory + Number(this.getInputedValue()))
    }

    if(this.operator === "-"){
      this.$input_number.val(this.memory - Number(this.getInputedValue()))
    }

    if(this.operator === "*"){
      this.$input_number.val(this.memory * Number(this.getInputedValue()))
    }

    if(this.operator === "/"){
      this.$input_number.val(this.memory / Number(this.getInputedValue()))
    }
    
    this.resetMemory()
  }
}

