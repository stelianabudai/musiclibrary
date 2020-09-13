import Song from '../models/Song'

const getSongsCountByGenre = async ()=>{
    var agg = [
            {"$group" : {_id:"$genreId", count:{$sum:1}}}
        ]
      return await Song.aggregate(agg)
}

const createSong = async (song) =>{
  await Song.create(song)
}

const getSongsPaginated = async (genreId, skip, limit) =>{
  return  await Song.find({genreId : genreId}).skip(skip).limit(limit) 
}

export {getSongsCountByGenre, createSong, getSongsPaginated}