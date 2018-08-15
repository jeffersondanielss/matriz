class Matriz {

  constructor(){
    this.data = []
  }

  unshift(...data){
    let arr = new Matriz();
    data.map( current => arr.push(current));
    this.data.map( current => arr.push(current));
    this.data = arr.data;

    return this.data
  }

  reverse() {
    const reversed = new Matriz()
    let size = this.data.length

    while(size) {
      size--
      reversed.push( this.data[size] )
    }

    this.data = reversed.data
    return reversed.data
  }

  slice(begin = 0, end = this.data.length ) {
    const matriz = new Matriz()

    if( begin < 0 ) { begin = this.data.length + begin }

    for( let index = begin; index < end; index++ ) {
      matriz.push( this.data[index] )
    }

    return matriz.data
  }

  lastIndex() {
    return this.data.length - 1
  }

  indexOf(searchElement, fromIndex = 0) {
    const size = this.data.length
    if( fromIndex < 0 ) { fromIndex = this.data.length + fromIndex  } 

    for( let index = fromIndex; index < size; index++ ) {
      if( this.data[index] === searchElement ) return index
    }

    return -1
  }

  forEach(callback) {
    const size = this.data.length

    for( let i = 0; i < size; i++ ) {
      callback(this.data[i])
    }
  }

  map(callback) {
    const size = this.data.length
    const stdout = new Matriz();

    for( let i = 0; i < size; i++ ) {
      stdout.push( callback(this.data[i], i, this.data) )
    }

    return stdout.data
  }

  toString() {
    const size = this.data.length
    let stdout = ''

    this.map(function(item, index){
      stdout += this.data[index]
      if( index !== size - 1 ) stdout += ','
    }.bind(this))

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
    this.data = this.slice(1, this.data.length)
    return first
  }

  pop() {
    let last = this.peek()
    this.data = this.slice(0, this.lastIndex())
    return last
  }

  peek() {
    return this.data[ this.lastIndex() ]
  }

  push(...record) {
    let beginPosition = this.data.length ? this.data.length : 0

    for( let i = 0; i < record.length; i++ ) {
      this.data[beginPosition + i] = record[i]
    }
    return this.data.length
  }
  
}

module.exports = Matriz;
