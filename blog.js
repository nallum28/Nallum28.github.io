document.addEventListener("DOMContentLoaded", () => {
    const postsPerPage = 2;
    let currentPage = 1;
    
    const posts = [
        { id: "stewarding", title: "Reflections on My First Stewarding Shift", content: "It was a great learning experience..." },
        { id: "cyber-conference", title: "Hosting a Cyber Conference: What I Learned", content: "The Cybersecurity Room: A Digital Investigation Unfolds." },
        { id: "school-workshops", title: "Teaching Cybersecurity to School Kids", content: "I designed a fun workshop where..." },
        { id: "school-visits", title: "Showcasing My Degree to Schools", content: "### The Cybersecurity Room: A Digital Investigation Unfolds\nThe event revolved around a **murder mystery** with **five suspects**, each with potential motives and hidden connections to the victim. In my room, students became part of the digital investigation. I **projected my screen** to the room, demonstrating **OSINT (Open-Source Intelligence)** techniques and **password cracking** in real time.\n\nWhile I led the technical investigation, the students weren’t just passive observers—they **interacted at various points**, contributing ideas, making observations, and helping to piece together the clues. Their input was key as we uncovered **private messages** between the suspect and victim, providing **critical evidence** for the courtroom portion of the day.\n\n### From Concept to Execution\nCreating this experience required **close collaboration with the overall lead** and the **scriptwriter** responsible for the day’s narrative. We worked together to ensure that the cybersecurity portion **fit seamlessly into the storyline**, while keeping the techniques realistic but accessible for the **14-16 year old audience**. The goal was to make it educational, engaging, and slightly cinematic—giving students a glimpse into how digital investigations are conducted.\n\n### Impact and Reflections\nWatching the students engage with the **cybersecurity process**—from spotting key details to reacting to the unfolding evidence—was incredibly rewarding. Their curiosity and willingness to participate highlighted just how **impactful hands-on, immersive learning** can be.\n\nReturning to the outreach office afterward, I reflected on how this event came together so quickly after the **school visit**. It was a reminder of how **spontaneous opportunities** can lead to some of the most memorable experiences. The chance to **showcase cybersecurity skills** in an interactive format, while collaborating with creative leads, was a highlight—and hopefully, it sparked some interest in **tech and digital forensics** among the students."" },
        { id: "campus-tours", title: "Hosting Campus Tours for Departments", content: "Giving a tour is more than just walking around..." }
    ];

    const container = document.getElementById("blog-container");
    const pageNumber = document.getElementById("pageNumber");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");

    function renderPosts() {
        container.innerHTML = "";
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const paginatedPosts = posts.slice(start, end);

        paginatedPosts.forEach(post => {
            const postElement = document.createElement("article");
            postElement.innerHTML = `<h2 id="${post.id}">${post.title}</h2><p>${post.content}</p>`;
            container.appendChild(postElement);
        });

        pageNumber.textContent = currentPage;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = end >= posts.length;
    }

    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPosts();
        }
    });

    nextPageBtn.addEventListener("click", () => {
        if ((currentPage * postsPerPage) < posts.length) {
            currentPage++;
            renderPosts();
        }
    });

    renderPosts();
});
