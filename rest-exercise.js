function capture(...words){
  return words;
}
// What will capture('establishment', 'thetical', 'pasti') return? Why?
// What will capture(['establishment', 'thetical', 'pasti']) return? Why?

function prefixForEach(...words){
  return words.forEach(wd => 'anti' + wd);
}

function prefixMap(...words){
  return words.map(wd => 'anti' + wd);
}

//  Which function will return [ "antiestablishment", "antithetical", "antipasti" ], prefixMap or prefixForEach? Why?

function multiply(...numbers){
  return [numbers];
}
// What will multiply(9,2,5) return? Why?

function makeProfiles(...names){
  const baseProfile = {
    username:'',
    id:101
  };
  const profiles = names.map((name, index) => {
    const newProfile = {...baseProfile};
    newProfile.username = name;
    newProfile.id = parseInt(`10${index}`)
    return newProfile;
  })

  return profiles;

}

const users = makeProfiles('agatha', 'kenny', 'elen', 'dante');
// What data type is users? Why?
// What is users.length? Why?

users[0].username = 'jenny';
// What is users[1].name? Why?
users[3].id = users[3].id + 10;
// What is users[0].id?

const group = makeProfiles(12,332,553454);
// What is group.length?
// What is group[0].username?
// What is group[0].id?