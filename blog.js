document.addEventListener("DOMContentLoaded", () => {
    const postsPerPage = 2;
    let currentPage = 1;

    const posts = [
        { id: "stewarding", title: "Reflections on My First Stewarding Shift", content: "It was a great learning experience..." },
        { id: "cyber-conference", title: "Hosting a Cyber Conference: What I Learned", content: "The Cybersecurity Room: A Digital Investigation Unfolds." },
        { id: "school-visits", title: "Creating an Immersive Day",content: `
    <h3>The Cybersecurity Room: A Digital Investigation Unfolds</h3>
    <p>The event revolved around a <strong>murder mystery</strong> with <strong>five suspects</strong>, each with potential motives and hidden connections to the victim. In my room, students became part of the digital investigation. I <strong>projected my screen</strong> to the room, demonstrating <strong>OSINT (Open-Source Intelligence)</strong> techniques and <strong>password cracking</strong> in real time.</p>

    <p>While I led the technical investigation, the students weren’t just passive observers—they <strong>interacted at various points</strong>, contributing ideas, making observations, and helping to piece together the clues. Their input was key as we uncovered <strong>private messages</strong> between the suspect and victim, providing <strong>critical evidence</strong> for the courtroom portion of the day.</p>

    <h3>From Concept to Execution</h3>
    <p>Creating this experience required <strong>close collaboration with the overall lead</strong> and the <strong>scriptwriter</strong> responsible for the day’s narrative. We worked together to ensure that the cybersecurity portion <strong>fit seamlessly into the storyline</strong>, while keeping the techniques realistic but accessible for the <strong>14-16 year old audience</strong>. The goal was to make it educational, engaging, and slightly cinematic—giving students a glimpse into how digital investigations are conducted.</p>

    <h3>Impact and Reflections</h3>
    <p>Watching the students engage with the <strong>cybersecurity process</strong>—from spotting key details to reacting to the unfolding evidence—was incredibly rewarding. Their curiosity and willingness to participate highlighted just how <strong>impactful hands-on, immersive learning</strong> can be.</p>

    <p>Returning to the outreach office afterward, I reflected on how this event came together so quickly after the <strong>school visit</strong>. It was a reminder of how <strong>spontaneous opportunities</strong> can lead to some of the most memorable experiences. The chance to <strong>showcase cybersecurity skills</strong> in an interactive format, while collaborating with creative leads, was a highlight—and hopefully, it sparked some interest in <strong>tech and digital forensics</strong> among the students.</p>
    `
}
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

    // Rendering the initial posts when page loads
    renderPosts();
});
