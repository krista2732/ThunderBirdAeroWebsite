const teamContainer = document.getElementById("team-container");


async function loadTeam() {
    try {
        const response = await fetch("team.json");

        if (!response.ok) {
            throw new Error(`Failed to load team.json: ${response.status}`);
        }

        const team = await response.json();

        buildTeam(team);

    } catch (error) {
        console.error("Failed to load team:", error);
    }
}


function buildTeam(team) {

    teamContainer.innerHTML = "";

    for (const [category, members] of Object.entries(team)) {

        // Ignore empty categories
        if (!members || members.length === 0) {
            continue;
        }


        /* ================================
           CATEGORY
           ================================ */

        const categorySection = document.createElement("section");
        categorySection.className = "team-category";


        /* ================================
           CATEGORY HEADER
           ================================ */

        const categoryHeader = document.createElement("div");
        categoryHeader.className = "team-category-header";


        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category;


        const categoryLine = document.createElement("div");
        categoryLine.className = "team-category-line";


        categoryHeader.appendChild(categoryTitle);
        categoryHeader.appendChild(categoryLine);


        /* ================================
           MEMBER GRID
           ================================ */

        const teamGrid = document.createElement("div");
        teamGrid.className = "team-grid";


        for (const member of members) {

            const card = createMemberCard(member);

            teamGrid.appendChild(card);
        }


        /* ================================
           ASSEMBLE CATEGORY
           ================================ */

        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(teamGrid);

        teamContainer.appendChild(categorySection);
    }
}


function createMemberCard(member) {

    const card = document.createElement("article");
    card.className = "team-member";


    // Image

    const image = document.createElement("img");

    image.className = "member-image";
    image.src = member.image;
    image.alt = member.name;


    // Content

    const content = document.createElement("div");
    content.className = "member-content";


    // Name

    const name = document.createElement("h3");

    name.className = "member-name";
    name.textContent = member.name;


    // Title

    const title = document.createElement("p");

    title.className = "member-title";
    title.textContent = member.title;


    // Description

    const description = document.createElement("p");

    description.className = "member-description";
    description.textContent = member.desc;


    // Assemble content

    content.appendChild(name);
    content.appendChild(title);
    content.appendChild(description);

    card.appendChild(image);
    card.appendChild(content);


    return card;
}


loadTeam();
