const genres = ["First Person Shooter", "Third Person Shooter", "RPG", "3D Platformer", "2D Platformer", "City Builder", "Sandbox", "4X", "Tower Defense", "Metroidvania", "Rogue-like"]
const genre_adjectives = ["Classic", "Modern", "Minimalist", "Textbased", "MMO", "Souls-like", "Class-based", "Character-driven", "Story-driven", "Gamplay-driven", "Satirical"];
const adjectives = [];
const nouns = [];
const objects = [];
const regions = [];
const event = [];
const verbs = [];

const get_random_in = (arr) => return arr[Math.floor(Math.random()*arr.length)];

const generate = () => {
    let idea = "A " + get_random_in(genre_adjectives) + " " + get_random_in(genres);
    if Math.random() > 0.75 {
        idea += " following a " + get_random_in(nouns) + "'s journey to " + get_random_in(verbs) + " an ";
        
        idea += get_random_in(adjectives) + " " + get_random_in(nonus + objects);
    } else if Math.random() > 0.5 {
        idea = " taking place in an " + get_random_in(regions) + " after a " + get_random_in(adjectives) + " " + get_random_in(event); 
    } else {
        idea += " about a " + get_random_in(nouns) + " who " + get_random_in(verbs) + " " + get_random_in(objects + nouns);
    }

    idea += ".";
    
    document.getElementById("idea").textContent = idea;
}
