class BaseCommand {
    constructor(opts) {
        if(!opts) {
            throw new Error("Missing options object")
        }
    }
    run() {
        throw new Error("Method not implemented")
    }
}

class LogCommand extends BaseCommand{
    constructor(opts) {
        super(opts)
        this.msg = opts.msg,
        this.level = opts.level
    }
    run() {
        console.log("Log(", this.level, "): ", this.msg)
    }
}

class WelcomeCommand extends BaseCommand {
    constructor(opts) {
        super(opts)
        this.username = opts.usr
    }
    run() {
        console.log("Hello ", this.username, " welcome to the world!")
    }
}

let commands = [
    new WelcomeCommand({usr: "Fernando"}),
    new WelcomeCommand({usr: "reader"}),
    new LogCommand({
        msg: "This is a log message, careful now...",
        level: "info"
    }),
    new LogCommand({
        msg: "Something went terribly wrong! We're doomed!",
        level: "error"
    })
]

commands.forEach( c => {
    c.run()
})