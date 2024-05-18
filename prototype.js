const prototype = {
    greeting: 'Hello',
    sayHello: function() {
      console.log(this.greeting + ' World!')
    },
    clone: function() {
      return Object.create(this)
    }
}

const newObj = prototype.clone()
newObj.greeting = 'Hola'
newObj.sayHello()














const cachePrototype = {
  data: {},
  getData: function(key) {
    return this.data[key]
  },
  setData: function(key, value) {
    this.data[key] = value
  },
  clone: function() {
    const cache = Object.create(this)
    cache.data = Object.create(this.data)
    return cache
  }
}

const cache = cachePrototype.clone()

cache.setData('key1', 'value1')
cache.setData('key2', 'value2')
cache.setData('key3', 'value3')

const newCache = cache.clone()
console.log(newCache.getData('key1'))
newCache.setData('key2', 'new value')