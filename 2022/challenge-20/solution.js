function howManyReindeers(reindeerTypes, gifts) {
  const getReindeers = (weight) => {
    const allowedReindeersTypes = reindeerTypes.filter(
      reindeerType => reindeerType.weightCapacity < weight
    )

    let totalWeightCapacity = allowedReindeersTypes.reduce(
      (acc, reindeerType) => acc + reindeerType.weightCapacity, 0)

    return allowedReindeersTypes
      .map(reindeerType => {
        const num = Math.floor(weight / totalWeightCapacity)
        weight -= num * reindeerType.weightCapacity
        totalWeightCapacity -= reindeerType.weightCapacity
        return { type: reindeerType.type, num }
      })
      .filter(reindeerType => reindeerType.num > 0)
  }

  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

  return gifts.map(gift => ({
    country: gift.country,
    reindeers: getReindeers(gift.weight),
  }))
}

const reindeerTypes = [
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const moreReindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  ...reindeerTypes
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'Germany', weight: 7 },
]

const moreGifts = [
  ...gifts,
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

const gifts2 = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

console.log(howManyReindeers(moreReindeerTypes, gifts2))
console.log(howManyReindeers(moreReindeerTypes, moreGifts))
console.log(howManyReindeers(reindeerTypes, gifts))
