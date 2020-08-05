// Object.defineProperty()

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log('get')
        },
        set(newVal) {
            if (val !== newVal) {
                val = newVal
                console.log('set', key)
            }
        }
    })
}

const obj = {}
defineReactive(obj, 'foo', 'foo')
obj.foo
obj.foo = 'foooooo'
