document.querySelector(".task-list").style.display = "none"
document.querySelector(".task-input input").focus()
function addTask() {
  var taskListUL = document.querySelector(".task-list ul")
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
    document.querySelector(".task-list").style.display = "flex"
    var newTask = document.createElement("LI")
    var span = document.createElement("SPAN")
    var buttons = document.createElement("DIV")
    var doBut = document.createElement("BUTTON")
    var remBut = document.createElement("BUTTON")
    span.textContent = inputValue
    buttons.classList.add("buttons","d-flex")
    remBut.classList.add("fa-solid","fa-circle-minus")
    remBut.addEventListener("click", remTask)
    doBut.classList.add("fa-regular","fa-circle-check")
    doBut.addEventListener("click", doRedo)
    newTask.appendChild(span)
    buttons.appendChild(remBut)
    buttons.appendChild(doBut)
    newTask.appendChild(buttons)
    taskListUL.appendChild(newTask)
    input.value = ""
    input.focus()
  }
}
function remTask(e) {
  var ul = e.target.parentElement.parentElement.parentElement.childNodes.length
  if (ul > 1 ) {
    e.target.parentElement.parentElement.remove()
    return
  } else {
    e.target.parentElement.parentElement.remove()
    document.querySelector(".task-list").style.display = "none"
    }
  }
function doRedo(e) {
  e.target.parentElement.parentElement.classList.toggle("done-task")
  e.target.classList.toggle("fa-regular")
  e.target.classList.toggle("fa-circle-check")
  e.target.classList.toggle("fa-solid")
  e.target.classList.toggle("fa-rotate-left")
}