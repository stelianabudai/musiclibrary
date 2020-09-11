
db.Type.insertMany([
    {  
      "_id": "5f5a8b23c67a3f0ee1e6a7aa",
      "name": "Jazz",
      "publisher": "Netflix, Inc",
      "price": "Free",
      "img": {
        "src": "media/netflix.jpg",
        "alt": "netflix app icon"
      },
      "desc": "Jazz, musical form, often improvisational, developed by African Americans.  It was influenced by both European harmonic structure and African rhythms",
      "link": "https://www.britannica.com/art/jazz",
      "tweet": "Watch TV shows and movies recommended just for you"
    },
  
    {
      "_id": "5f5a8b23c67a3f0ee1e6a7ab",
      "name": "Pop",
      "songs":[ "Pop 1", "Pop 2", "Pop 3" ],
      "publisher": "Pandora Media, Inc",
      "price": "Free",
      "img": {
        "src": "media/pandora.jpg",
        "alt": "pandora icon"
      },
      "desc": "Pandora gives you a personalized music experience that continually evolves with your tastes. Create stations from your favorite songs, artists or genres. Or search browse to find recommended stations for your mood or activity.",
      "link": "https://itunes.apple.com/us/app/pandora-music/id284035177?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
      "tweet": "Pandora gives you a personalized music experience that continually evolves with your tastes"
    },
    {
      "_id": "5f5a8b23c67a3f0ee1e6a7ac",
      "name": "Rock",
      "songs":[ "Rock 1", "Rock 2", "Rock 3" ],
      "publisher": "Hulu, LLC",
      "price": "Free",
      "img": {
        "src": "media/hulu.jpg",
        "alt": "hulu icon"
      },
      "desc": "Enjoy all your TV in one place with a new Hulu experience – more personalized and intuitive than ever before. The choice is yours - select a plan featuring Hulu’s entire streaming library, or if you’ve subscribed through Hulu to a plan that includes Live TV",
      "link": "https://itunes.apple.com/us/app/hulu-watch-tv-shows-movies/id376510438?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
      "tweet": "Enjoy all your TV in one place with a new Hulu experience"
    },
  
    {
      "_id": "5f5a8b23c67a3f0ee1e6a7ad",
      "name": "Dance",
      "songs":[ "Dance 1", "Dance 2", "Dance 3" ],
      "publisher": "Supercell",
      "price": "Free",
      "img": {
        "src": "media/coc.jpg",
        "alt": "coc icon"
      },
      "desc": "Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars! Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!",
      "link": "https://itunes.apple.com/us/app/clash-of-clans/id529479190?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
      "tweet": "Join millions of players worldwide as you build your village"
    },
  
    {
      "_id": "5f5a8b23c67a3f0ee1e6a7ae",
      "name": "Pop Rock",
      "songs":[ "Pop Rock 1", "Pop Rock 2", "Pop Rock 3" ],
      "publisher": "King",
      "price": "Free",
      "img": {
        "src": "media/ccs.jpg",
        "alt": "Candy Crush Saga icon"
      },
      "desc": "Start playing Candy Crush Saga today - loved by millions of players around the world. With over a trillion levels played, this match 3 puzzle game is one of the most popular mobile games of all time!",
      "link": "https://itunes.apple.com/us/app/candy-crush-saga/id553834731?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
      "tweet": "Start playing Candy Crush Saga today"
    },

    {
      "_id": "5f5a8b23c67a3f0ee1e6a7af",
      "name": "Pop Dance",
      "songs":[ "Pop Dance 1", "Pop Dance 2", "Pop Dance 3" ],
      "publisher": "King",
      "price": "Free",
      "img": {
        "src": "media/ccs.jpg",
        "alt": "Candy Crush Saga icon"
      },
      "desc": "Start playing Candy Crush Saga today - loved by millions of players around the world. With over a trillion levels played, this match 3 puzzle game is one of the most popular mobile games of all time!",
      "link": "https://itunes.apple.com/us/app/candy-crush-saga/id553834731?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
      "tweet": "Start playing Candy Crush Saga today"
    }
    
  ]
  )

db.Song.insertMany([
  {  
    "typeId": "5f5a8b23c67a3f0ee1e6a7aa",
    "name": "Jazz",
    "desc": "Jazz, musical form, often improvisational, developed by African Americans.  It was influenced by both European harmonic structure and African rhythms"
  },

  {
    "typeId": "5f5a8b23c67a3f0ee1e6a7aa",
    "name": "Pop",
    "desc": "Pandora gives you a personalized music experience that continually evolves with your tastes. Create stations from your favorite songs, artists or genres. Or search browse to find recommended stations for your mood or activity."
  },
  {
    "typeId": "5f5a8b23c67a3f0ee1e6a7aa",
    "name": "Rock",
    "desc": "Enjoy all your TV in one place with a new Hulu experience – more personalized and intuitive than ever before. The choice is yours - select a plan featuring Hulu’s entire streaming library, or if you’ve subscribed through Hulu to a plan that includes Live TV"
  },

  {
    "typeId": "5f5a8b23c67a3f0ee1e6a7aa",
    "name": "Dance",
    "desc": "Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars! Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!"
  },

  {
    "typeId": "5f5a8b23c67a3f0ee1e6a7aa",
    "name": "Pop Rock",
    "desc": "Start playing Candy Crush Saga today - loved by millions of players around the world. With over a trillion levels played, this match 3 puzzle game is one of the most popular mobile games of all time!"
  },

  {
    "typeId": "5f5a8b23c67a3f0ee1e6a7af",
    "name": "Pop Dance",
    "desc": "Start playing Candy Crush Saga today - loved by millions of players around the world. With over a trillion levels played, this match 3 puzzle game is one of the most popular mobile games of all time!"
  } 
]
)

