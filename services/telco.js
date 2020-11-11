export const buyCard = async (provider, denomination) => {
  console.log('buy card', denomination, provider);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1e3);
  })
}

export const getCards = () => (
  [
    {
      "provider": "vietel",
      "url": "https://www.vban.vn/Resources/images/logo/viettel1.png",
      "cards": [
        {
          "denomination": 10000,
          "discount": 200
        },
        {
          "denomination": 20000,
          "discount": 400
        },
        {
          "denomination": 30000,
          "discount": 600
        },
        {
          "denomination": 50000,
          "discount": 1000
        },
        {
          "denomination": 100000,
          "discount": 2000
        },
        {
          "denomination": 200000,
          "discount": 4000
        },
        {
          "denomination": 300000,
          "discount": 6000
        },
        {
          "denomination": 500000,
          "discount": 10000
        },
        {
          "denomination": 1000000,
          "discount": 20000
        },
        {
          "denomination": 2000000,
          "discount": 40000
        }
      ]
    },
    {
      "provider": "mobifone",
      "url": "https://www.vban.vn/Resources/images/logo/mobiphone1.png",
      "cards": [
        {
          "denomination": 10000,
          "discount": 200
        },
        {
          "denomination": 20000,
          "discount": 400
        },
        {
          "denomination": 30000,
          "discount": 600
        },
        {
          "denomination": 50000,
          "discount": 1000
        },
        {
          "denomination": 100000,
          "discount": 2000
        },
        {
          "denomination": 200000,
          "discount": 4000
        },
        {
          "denomination": 300000,
          "discount": 6000
        },
        {
          "denomination": 500000,
          "discount": 10000
        },
        {
          "denomination": 1000000,
          "discount": 20000
        },
        {
          "denomination": 2000000,
          "discount": 40000
        }
      ]
    },
    {
      "provider": "vinaphone",
      "url": "https://www.vban.vn/Resources/images/logo/vinaphone1.png",
      "cards": [
        {
          "denomination": 10000,
          "discount": 200
        },
        {
          "denomination": 20000,
          "discount": 400
        },
        {
          "denomination": 30000,
          "discount": 600
        },
        {
          "denomination": 50000,
          "discount": 1000
        },
        {
          "denomination": 100000,
          "discount": 2000
        },
        {
          "denomination": 200000,
          "discount": 4000
        },
        {
          "denomination": 300000,
          "discount": 6000
        },
        {
          "denomination": 500000,
          "discount": 10000
        },
        {
          "denomination": 1000000,
          "discount": 20000
        },
        {
          "denomination": 2000000,
          "discount": 40000
        }
      ]
    },
    {
      "provider": "vietnamobile",
      "url": "https://www.vban.vn/Resources/images/logo/vietnammobile1.png",
      "cards": [
        {
          "denomination": 10000,
          "discount": 200
        },
        {
          "denomination": 20000,
          "discount": 400
        },
        {
          "denomination": 30000,
          "discount": 600
        },
        {
          "denomination": 50000,
          "discount": 1000
        },
        {
          "denomination": 100000,
          "discount": 2000
        },
        {
          "denomination": 200000,
          "discount": 4000
        },
        {
          "denomination": 300000,
          "discount": 6000
        },
        {
          "denomination": 500000,
          "discount": 10000
        },
        {
          "denomination": 1000000,
          "discount": 20000
        },
        {
          "denomination": 2000000,
          "discount": 40000
        }
      ]
    }
  ]
)

export const getDatas = () => (
  [
    {
      "provider": "vietel",
      "url": "https://www.vban.vn/Resources/images/logo/viettel1.png",
      "packages": [
        {
          "days": 1,
          "data": "2GB",
          "price": 10000,
          "discount": 1600
        },
        {
          "days": 7,
          "data": "7GB",
          "price": 30000,
          "discount": 3000
        },
        {
          "days": 10,
          "data": "2GB",
          "price": 42000,
          "discount": 8000
        },
        {
          "days": 30,
          "data": "1GB",
          "price": 40000,
          "discount": 8000
        },
        {
          "days": 10,
          "data": "3GB",
          "price": 54000,
          "discount": 11000
        },
        {
          "days": 30,
          "data": "3GB",
          "price": 70000,
          "discount": 15000
        },
        {
          "days": 3,
          "data": "3GB",
          "price": 18000,
          "discount": 4000
        }
      ]
    },
    {
      "provider": "mobifone",
      "url": "https://www.vban.vn/Resources/images/logo/mobiphone1.png",
      "packages": [
        {
          "days": 1,
          "data": "2GB",
          "price": 10000,
          "discount": 1600
        },
        {
          "days": 7,
          "data": "7GB",
          "price": 30000,
          "discount": 3000
        },
        {
          "days": 10,
          "data": "2GB",
          "price": 42000,
          "discount": 8000
        },
        {
          "days": 30,
          "data": "1GB",
          "price": 40000,
          "discount": 8000
        },
        {
          "days": 10,
          "data": "3GB",
          "price": 54000,
          "discount": 11000
        },
        {
          "days": 30,
          "data": "3GB",
          "price": 70000,
          "discount": 15000
        },
        {
          "days": 3,
          "data": "3GB",
          "price": 18000,
          "discount": 4000
        }
      ]
    },
    {
      "provider": "vinaphone",
      "url": "https://www.vban.vn/Resources/images/logo/vinaphone1.png",
      "packages": [
        {
          "days": 1,
          "data": "2GB",
          "price": 10000,
          "discount": 1600
        },
        {
          "days": 7,
          "data": "7GB",
          "price": 30000,
          "discount": 3000
        },
        {
          "days": 10,
          "data": "2GB",
          "price": 42000,
          "discount": 8000
        },
        {
          "days": 30,
          "data": "1GB",
          "price": 40000,
          "discount": 8000
        },
        {
          "days": 10,
          "data": "3GB",
          "price": 54000,
          "discount": 11000
        },
        {
          "days": 30,
          "data": "3GB",
          "price": 70000,
          "discount": 15000
        },
        {
          "days": 3,
          "data": "3GB",
          "price": 18000,
          "discount": 4000
        }
      ]
    },
    {
      "provider": "vietnamobile",
      "url": "https://www.vban.vn/Resources/images/logo/vietnammobile1.png",
      "packages": [
        {
          "days": 1,
          "data": "2GB",
          "price": 10000,
          "discount": 1600
        },
        {
          "days": 7,
          "data": "7GB",
          "price": 30000,
          "discount": 3000
        },
        {
          "days": 10,
          "data": "2GB",
          "price": 42000,
          "discount": 8000
        },
        {
          "days": 30,
          "data": "1GB",
          "price": 40000,
          "discount": 8000
        },
        {
          "days": 10,
          "data": "3GB",
          "price": 54000,
          "discount": 11000
        },
        {
          "days": 30,
          "data": "3GB",
          "price": 70000,
          "discount": 15000
        },
        {
          "days": 3,
          "data": "3GB",
          "price": 18000,
          "discount": 4000
        }
      ]
    }
  ]
)