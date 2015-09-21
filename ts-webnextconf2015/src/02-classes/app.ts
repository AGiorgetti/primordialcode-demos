/// <reference path="classes.ts" />

var l: ILogger = new ConsoleLogger("custom logger");

l.log("test message");





// inheritance and methods overriding
/*
var loggerBase = new Logger.LoggerBase("base");
var loggerDerived = new Logger.ConsoleLogger2("derived");

loggerDerived.log("derived");
loggerBase.log("base");
*/
