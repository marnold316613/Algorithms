const helloWorld = () => {
  console.log('Hello World');
}


//lookup - O(1) 
//search - O(1)
//insert - O(1)
//delete - O(1)

const firstRecurringCharacter = (input) => {
  if (!input || typeof input==='undefined')
  {
    return undefined;
  }
  const hash = new Set();
  for(let i =0;i<input.length;i++)
  {
    if (hash.has(input[i]))
    {
      return input[i]
    }
    hash.add(input[i]);
  }

}

const firstRecurringCharacterUsingObject = (input) => {
  if (!input || typeof input==='undefined')
  {
    return undefined;
  }
  let hash = {}
  for(let i =0;i<input.length;i++)
  {
    if (typeof hash[input[i]]!=='undefined')  //if a value exists for a key then the key exists
    {
      return input[i]
    }
    hash[input[i]]=i;  //i doesn't matter as we are just tracking keys
  }

}











module.exports = {
  helloWorld:helloWorld,
  firstRecurringCharacter:firstRecurringCharacter,
  firstRecurringCharacterUsingObject:firstRecurringCharacterUsingObject
}