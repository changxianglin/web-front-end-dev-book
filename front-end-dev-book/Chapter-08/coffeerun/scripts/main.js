(function (window) {
  'use strict'
  var FORM_SELECTOR = '[data-coffee-order="form"]'
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'

  var App = window.App
  var Truck = App.Truck
  var DataStore = App.DataStore
  var FormHandler = App.FormHandler
  var Validation = App.Validation
  var CheckList = App.CheckList

  var myTruck = new Truck('ncc-1701', new DataStore())
  window.myTruck = myTruck
  var checkList = new CheckList(CHECKLIST_SELECTOR)
  checkList.addClickHandler(myTruck.deliveOrder.bind(myTruck))
  var formhandler = new FormHandler(FORM_SELECTOR)


  formhandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data)
    checkList.addRow.call(checkList, data)
  })

  formhandler.addInputHandler(Validation.isCompanyEmail)

  console.log(formhandler)
})(window)
