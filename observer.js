import http from 'http'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Your own server here')
})
  
server.on('error', err => {
    console.log('Error: ', err)
})
  
server.listen(3000, '127.0.0.1', () => {
    console.log('Server up and running')
})











class Observable {

    constructor() {
            this.observers = {}
    }

    on(input, observer) {
            if(!this.observers[input]) this.observers[input] = []
            this.observers[input].push(observer)
    }

    triggerInput(input, params) {
            this.observers[input].forEach( o => {
                    o.apply(null, params)    
            })
    }
}

class Server extends Observable {

    constructor() {
            super()
    }


    triggerError() {
            let errorObj = {
                    errorCode: 500,
                    message: 'Port already in use'
            }
            this.triggerInput('error', [errorObj])
    }
}














import { EventEmitter } from 'node:events'
const eventEmitter = new EventEmitter()

eventEmitter.on('userDeleted', (email) => {
    console.log('User with email:', email, ' has been deleted.')
})

eventEmitter.emit('userDeleted', 'myemail@gmail.com')