/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  
var => redeclare (yes) , let and const => no 
var => access before declare (undifeind) , let , const => error 
var => scope drama (in window object ) let , const => no
*/

console.log(a);
var a = 1;
var a = 2;

// let b = 1;
// let b = 2;