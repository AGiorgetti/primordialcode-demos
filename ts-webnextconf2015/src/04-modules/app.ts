// modules
// - used with Node.js
// - used with Require.js
// - can be loaded dynamically

/*
import { ILogger, ConsoleLogger } from "./LoggerModule"

var l: ILogger = new ConsoleLogger("custom logger");
*/

//import * as logger from "./loggerModule"
import logger = require("./LoggerModule");

var l: logger.ILogger = new logger.ConsoleLogger("custom logger");

l.log("test message");
