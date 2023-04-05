// 函数受函数作用域的限制,类受块作用域的限制
{
    function FunctionDeclaration() { }
    class ClassDeclaration { }
}

console.log(FunctionDeclaration); // FunctionDeclaration
console.log(ClassDeclaration); // ReferenceError