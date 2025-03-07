use('restaurante')

db.pedidos.findOne()

db.pedidos.aggregate([
    {
        $set: {
            Client: '$Customer ID',
            Itens: '$Items in order'
        }
    },
    {
        $unset: 'Customer ID',
    },
    {
        $unset: 'Items in order',
    },
    {
        $unwind: '$Itens'
    },
    {
        $match: {
            Client: '1ed226d1b8a5f7acee12fc1d6676558330a3b2b742af5d5c9d3ea550397d49ac'
        }
    },
    {
        $group: {
            _id: '$Client',
            totalPedidos: { $sum: 1 },
            totalGasto: { $sum: '$Total' },
            mediaDeGasto: { $avg: '$Total' },
            produtosComprados: {
                $push: {
                    produto: '$Itens',
                    Total: '$Total'
                }
            }
        }
    },
    {
        $set: {
            produtosComprados: {
                $sortArray: {
                    input: '$produtosComprados',
                    sortBy: { Total: -1 }
                }
            }
        }
    }

])