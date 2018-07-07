function produceDrivingRange(blockRange){
  return function(s, e){
    let start = parseInt(s)
    let end = parseInt(e)
    let distance = Math.abs(start - end )
    let difference = Math.abs(distance - blockRange)
      if (distance > blockRange){
        return `${difference} blocks out of range`
      }
      else {
        return `within range by ${difference}`
      }
    }
  }

  function produceTipCalculator(fare){
    return function(percent){
      return fare * percent
    }
  }

  function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.name = name
        this.id = driverId++
      }

    }
  }
