function fun1(a, fun) {
  console.log(a, fun);
  fun();
}

fun1(21, () => {
  console.log("Function as an argument");
});

/*
Scope: Scope is refered as the availability of variable or function in certian part of code
1: Global Variable: A variable is declared at the top of the program or outside the function is known as Global Variable.
  :: In JS a variable can be used without declaring it, which automatically become the auto global.

2: Local Scope: a variable can also have a local scope i.e. it can only be accessible in block or function (depending as whether the variable define using Var keyword(which is function scope)
    or variabe is defined using let or const keyword (which are block scoped) : to learn more about it refer to mdn docs

    Note: Let and Const dont allow redecleration but var allows it.
3: Hoisting in JS is a behaviour by which a variable or function can be used before the initilation  (not before declaration)
    - var supports hoisting but Let and Const does'nt support hoisting

    Note: Lexical Scoping means that the scope of varible is determined by its location in the source code
*/

// console.log();
