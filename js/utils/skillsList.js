import { skills } from '../data/skills.js';

export default function renderSkillsL() {
    const skillsContainer = document.getElementById("skills");
    
    // ¡Seguridad! Si no estamos en la página que tiene el contenedor de skills, salimos sin hacer nada.
    if (!skillsContainer) return; 

    const htmlContent = skills.map(skill => { 
        return `
            <div class="skill-card">
                <img src="${skill.icon}" alt="${skill.name}" width="40" class="skill-icon" />
                <h3>${skill.name}</h3>
                <span class="skill-level">${skill.level}</span>
                <p>${skill.description}</p>
            </div>
        `;
    }).join('');

    skillsContainer.innerHTML = `
        <h2>Skills</h2>
        <div class="skills-grid">
            ${htmlContent}
        </div>
    `;
}