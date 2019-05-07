function songDecoder(song){
  return song.replace(/^(WUB){1,}|(WUB){1,}$/g, "").replace(/(WUB){1,}/g, " ")
}

// remove the WUBS
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))
  // =>  WE ARE THE CHAMPIONS MY FRIEND
