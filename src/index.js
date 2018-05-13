class matriz {

  constructor(){
    this.data = []
  }

  lastIndex() {
    return this.data.length - 1
  }

  forEach(callback) {
    const size = this.data.length

    for( let i = 0; i < size; i++ ) {
      callback(this.data[i])
    }
  }

  map(callback) {
    const size = this.data.length
    const stdout = new matriz();

    for( let i = 0; i < size; i++ ) {
      stdout.push( callback(this.data[i], i, this.data) )
    }

    return stdout.data
  }

  toString() {
    const size = this.data.length
    let stdout = ''

    for ( let i = 0; i < size; i++ ) {
      stdout += this.data[i]
      if( i !== size - 1 ) stdout += ','
    }

    return stdout;
  }

  includes(searchElement, fromIndex = 0) {
    const size = this.data.length

    for ( let i = fromIndex; i < size; i++ ) {
      if ( this.data[i] === searchElement ) {
        return true
      }
    }

    return false
  }

  shift() {
    let first = this.data[0]
    this.data = this.data.slice(1, this.data.length)
    return first
  }

  pop() {
    let last = this.peek()
    this.data = this.data.slice(0, this.lastIndex())
    return last
  }

  peek() {
    return this.data[ this.lastIndex() ]
  }

  push(record) {
    this.data.length
      ? this.data[ this.data.length ] = record
      : this.data[0] = record
  }
  
}

module.exports = matriz;
