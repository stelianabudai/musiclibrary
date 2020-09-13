import Song from '../models/Song'

const getSongsCountByGenre = async ()=>{
    var agg = [
            {"$group" : {_id:"$typeId", count:{$sum:1}}}
        ]
      return await Song.aggregate(agg)
}

const createSong = async (song) =>{
  await Song.create(song)
}

const getSongsPaginated = async (typeId, skip, limit) =>{
  return  await Song.find({typeId : typeId}).skip(skip).limit(limit) 
}

export {getSongsCountByGenre, createSong, getSongsPaginated}