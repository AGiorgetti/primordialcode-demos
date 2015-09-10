/*
import { ILogger, ConsoleLogger } from "./LoggerModule"
var l: ILogger = new ConsoleLogger("custom logger");
*/

import logger = require("./LoggerModule");
var l: logger.ILogger = new logger.ConsoleLogger("custom logger");

l.log("test message");
