/// <reference path="classes.ts" />

var l: Logger.ILogger = new Logger.ConsoleLogger("custom logger");

l.log("test message");
