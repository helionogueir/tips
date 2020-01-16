# [Event Emitter](script.js)

> [See more examples ...](../../README.md)

```javascript
const EventEmitter = require('events');

/**
 * Variables
 */
const index = Math.floor(Math.random() * 3)
const actions = { 'SUCCESS': 'success', 'NORMAL': 'normal', 'FAIL': 'fail' }
const { SUCCESS, NORMAL, FAIL } = actions

/**
 * Example
 */
const events = new EventEmitter()
  .on(SUCCESS, (key) => console.log(`Success, Index Number: ${key}`))
  .on(NORMAL, (key) => console.log(`Normal, Index Number: ${key}`))
  .on(FAIL, (key) => console.log(`Fail, Index Number: ${key}`))

events.emit(Object.values(actions)[index], index)
```
