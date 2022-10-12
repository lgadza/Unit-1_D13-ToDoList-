/* EXERCISE 5:
              Add a new task to the list.
              Suggestion:
              - Use document.getElementById to get the UL item and the input text
              - Use the document.createElement to create the new List Item
              - Append the LI child to the UL
          */
const addNewTask = function () {
  let ul = document.getElementById("myTaskList");
  let li = document.createElement("li");
  let input = document.getElementById("newTask").value;

  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
};

/* EXERCISE 6:
              Create a function "removeLast" which removes the last item from the task list
          */
document.getElementById("removeLastTask").onclick = function removeLast() {
  let ul = document.getElementById("myTaskList");
  ul.removeChild(ul.lastChild);
};

/* EXERCISE 7:
              Create a function "removeFirst" which removes the first item from the task list
          */
document.getElementById("removeFirstTask").onclick = function removeFirst() {
  let ul = document.getElementById("myTaskList");
  ul.removeChild(ul.firstChild);
};

/* EXERCISE 8:
             Create a function "getTasksAsArray" which returns, and prints to the console an array containing the tasks as strings
          */
const getTasksAsArray = function () {
  let list = document.querySelectorAll("li");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
};
/* EXERCISE 9:
             Create a function "changeTaskBackgroundColor" and attach it to the "Change task background" button via JavaScript (not via html attribute)
             Take the color from the color picker ad apply it as background to every list item
    */
// function changeTaskBackgroundColor() {
//        const button
//    }

/* ### EXTRA ### */

/* EXERCISE 10:
              Attach an eventListener to each new task you create. When the task receives the click it should be removed (only the clicked task should disappear)
    */

/* EXERCISE 11:
             Create a function "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
    */

/* #### Suggestion:
     - Break the code into many function for semplicity 
     - Reuse the functions previously created */