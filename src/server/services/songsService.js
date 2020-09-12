import Song from '../models/Song'

const getSongsCountByGenre = async ()=>{
    var agg = [
            {"$group" : {_id:"$typeId", count:{$sum:1}}}
        ]
      return await Song.aggregate(agg)
}

export {getSongsCountByGenre}