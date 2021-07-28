import { getUser } from '../data/data-functions.js';
import companionPlants from '../data/companion-data.js';

getUser();
export function renderCompanion(friends) {
 
    const companionDiv = document.createElement('div');

    const companionImg = document.createElement('img');
    companionImg.src = '../assets/' + friends.image;
    
    const companionh1 = document.createElement('h1');
    companionh1.textContent = `Name: ${friends.name}`;

    const companionSpan = document.createElement('span');
    companionSpan.textContent = `Purpose: ${friends.purpose}`;
    

    companionDiv.append(companionImg, companionh1, companionSpan);

    return companionDiv;
}

export function renderIcons(icons){
    const iconsDiv = document.createElement('div');
    const iconsImg = document.createElement('img');
    iconsImg.src = '../assets/icons/' + icons.icon;

    iconsDiv.append(iconsImg);
    return iconsDiv;
}