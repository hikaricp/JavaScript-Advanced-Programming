console.log(FunctionExpression); // undefined
var FunctionExpression = function () { };
console.log(FunctionExpression); // function() {}

console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() { }
console.log(FunctionDeclaration); // FunctionDeclaration() {}

console.log(ClassExpression); // undefined
var ClassExpression = class { };
console.log(ClassExpression); // class {}

console.log(ClassDeclaration); // ReferenceError
class ClassDeclaraion { }
console.log(ClassDeclaration); // class Declaration {}