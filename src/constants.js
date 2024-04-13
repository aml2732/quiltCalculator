const QUILT_DIMENSIONS = {
  undefined: {
    width_inches: 0,
    height_inches: 0,
  },
  "Twin": {
    width_inches: 38,
    height_inches: 75,
  },
  "Twin XL": {
    width_inches: 38,
    height_inches: 80,
  },
  "Full": {
    width_inches: 54,
    height_inches: 75,
  },
  "Queen": {
    width_inches: 60,
    height_inches: 80,
  },
  "King": {
    width_inches: 76,
    height_inches: 80,
  },
  "California King": {
    width_inches: 72,
    height_inches: 84,
  }
}

const SEAM_ALLOWANCE_NUMBER_MAP = {
  "1/4inch": 0.25,
  "3/8inch": 0.375,
  "1/2inch": 0.5,
  "5/8inch": 0.625,
  "3/4inch": 0.75,
}

export {QUILT_DIMENSIONS, SEAM_ALLOWANCE_NUMBER_MAP}
