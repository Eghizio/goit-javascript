"use strict"

function whatIsThis() {
  console.log(this);
}

// "this" in global scope
whatIsThis();
