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
  $input_number

  constructor() {
    this.resetMemory()
    this.$input_number = $("#input_number")
  }

  resetMemory = function () {
    this.memory = 0
    this.operator = ""
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
    this.calclate()
    this.memory = Number(this.getInputedValue())
    this.operator = "+"
    this.resetNumber()
  }

  minus = function () {
    this.calclate()
    this.memory = Number(this.getInputedValue())
    this.operator = "-"
    this.resetNumber()
  }

  multiple = function () {
    this.calclate()
    this.memory = Number(this.getInputedValue())
    this.operator = "*"
    this.resetNumber()
  }

  division = function () {
    this.calclate()
    this.memory = Number(this.getInputedValue())
    this.operator = "/"
    this.resetNumber()
  }

  calclate = function () {

    if (this.operator === "+") {
      this.$input_number.val(this.memory + Number(this.getInputedValue()))
    }

    if (this.operator === "-") {
      this.$input_number.val(this.memory - Number(this.getInputedValue()))
    }

    if (this.operator === "*") {
      this.$input_number.val(this.memory * Number(this.getInputedValue()))
    }

    if (this.operator === "/") {
      this.$input_number.val(this.memory / Number(this.getInputedValue()))
    }

    this.resetMemory()
  }
}
