use("pokemoncenter")

// db.combats.findOne()

db.combats.aggregate([
    {
        $lookup: {
            from: 'pokemon',
            localField: 'First_pokemon',
            foreignField: '_id',
            as: 'pokemon1'
        }
    },
    {
        $lookup: {
            from: 'pokemon',
            localField: 'Second_pokemon',
            foreignField: '_id',
            as: 'pokemon2'
        }
    },
    {
        $project: {
            _id: 0,
            Winner: 1,
            pokemon1: {
                $arrayElemAt: ['$pokemon1', 0]
            },
            pokemon2: {
                $arrayElemAt: ['$pokemon2', 0]
            }
        }
    },
    {
        $project: {
            Winner: {
                $cond: {
                    if: { $eq: ["$Winner", '$pokemon1._id'] },
                    then: "$pokemon1.name",
                    else: "$pokemon2.name",
                }
            },
            First_pokemon: "$pokemon1.name",
            Second_pokemon: '$pokemon2.name'
        }
    },
    {
        $limit: 1
    }
]).pretty()