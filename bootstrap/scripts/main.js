let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    console.log(this);
    console.log("My button has been clicked!");
});

function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }

  foo();