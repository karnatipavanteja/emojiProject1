console.log(emojiList);
let emoji_container = document.getElementById("emoji_container");
let search_field = document.getElementById("search_field");

function displayEmoji(query ='') {
    let filteredData=emojiList.filter(e=>{
        if(e.description.indexOf(query)!=-1){
            return true;
        }
        if(e.aliases.find(elem=>elem===query)){
            return true;
        }
        if(e.tags.find(elem=>elem===query)){
            return true;
        }
    })
    emoji_container.innerHTML=''
    filteredData.forEach(e => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");
        
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_description.innerText = e.description;
        
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);
        emoji_container.appendChild(new_row);
    });
}

function search_data(e) {
    let value = e.target.value;
    displayEmoji(value);
    // Implement search logic here
}

window.addEventListener('load', displayEmoji);
search_field.addEventListener('keyup', search_data);
