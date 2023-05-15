let SerialLogger: MicroBitLoggers.SerialLogger.SerialLogger = MicroBitLoggers.SerialLogger.createSerialLogger()
let DataLogger: MicroBitLoggers.DataLogger.DataLogger = MicroBitLoggers.DataLogger.createDataLogger()
let loggers = [SerialLogger, DataLogger]

let step = 0

basic.forever(function () {
	step++
    loggers.forEach((value: MicroBitLogger.ILogger, index) => {
        value.log(MicroBitLogger.LogType.Info, MicroBitLogger.generateSource(["main", "forever"]), `At cycle ${step}.`)
    })
})