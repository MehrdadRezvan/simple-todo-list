function addTask() {
  var taskList = document.querySelector(".task-list ul")
  var input = document.querySelector(".task-input input")
  var inputValue = input.value.trim()
  if (inputValue.length==0) {
    alert("شرح تسک را وارد کنید")
    input.value = ""
    input.focus()
    return
  } else if (inputValue.length>0 && inputValue.length<3) {
    alert("شرح تسک نمیتواند کمتر از سه کاراکتر باشد")
    input.value = ""
    input.focus()
    return
  } else {
    var newTask = document.createElement("LI")
    var span = document.createElement("SPAN")
    var buttons = document.createElement("DIV")
    var doBut = document.createElement("BUTTON")
    var remBut = document.createElement("BUTTON")
    span.textContent = inputValue
    buttons.classList.add("buttons","d-flex")
    remBut.classList.add("fa-solid","fa-circle-minus")
    doBut.classList.add("fa-regular","fa-circle-check")
    newTask.appendChild(span)
    buttons.appendChild(remBut)
    buttons.appendChild(doBut)
    newTask.appendChild(buttons)
    taskList.appendChild(newTask)
    input.value = ""
    input.focus()
  }
}
function remTask() {

}
function doRedo() {

}