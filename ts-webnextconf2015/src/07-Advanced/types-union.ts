// a value that can be one of several types: JavaScript is dynamic!
{
let x: string|string[]|(() => string);

x = "a";
x = ["a", "b"]
// x = 2; // Error!
}
