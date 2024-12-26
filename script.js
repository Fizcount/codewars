function hello(name){
    
    if(!name){
        return `Hello, World!`
    }
    function capitalEachWord(name){
        let words = name.split(' ');
        for (let i = 0; i < words.length;i++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); 
        }
    return words.join(' ');
    }
    let capitalName = capitalEachWord(name)
    return `Hello, ${capitalName}!`;
}

console.log(hello("fAiIzZ"))  
