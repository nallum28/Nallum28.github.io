document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post'); // Get the 'post' query parameter

    const posts = document.querySelectorAll('.blog-post');
    let currentPage = 0;

    const posts = [
        { id: "stewarding", title: "Reflections on My First Stewarding Shift", content: "It was a great learning experience..." },
        { id: "cyber-conference", title: "Hosting a Cyber Conference: What I Learned", content: "The Cybersecurity Room: A Digital Investigation Unfolds." },
        { id: "immersive-campus-day", title: "Creating an Immersive Day",content: `
    <h3>The Cybersecurity Room: A Digital Investigation Unfolds</h3>
    <p>The event revolved around a <strong>murder mystery</strong> with <strong>five suspects</strong>, each with potential motives and hidden connections to the victim. In my room, students became part of the digital investigation. I <strong>projected my screen</strong> to the room, demonstrating <strong>OSINT (Open-Source Intelligence)</strong> techniques and <strong>password cracking</strong> in real time.</p>

    <p>While I led the technical investigation, the students weren’t just passive observers—they <strong>interacted at various points</strong>, contributing ideas, making observations, and helping to piece together the clues. Their input was key as we uncovered <strong>private messages</strong> between the suspect and victim, providing <strong>critical evidence</strong> for the courtroom portion of the day.</p>

    <h3>From Concept to Execution</h3>
    <p>Creating this experience required <strong>close collaboration with the overall lead</strong> and the <strong>scriptwriter</strong> responsible for the day’s narrative. We worked together to ensure that the cybersecurity portion <strong>fit seamlessly into the storyline</strong>, while keeping the techniques realistic but accessible for the <strong>14-16 year old audience</strong>. The goal was to make it educational, engaging, and slightly cinematic—giving students a glimpse into how digital investigations are conducted.</p>

    <h3>Impact and Reflections</h3>
    <p>Watching the students engage with the <strong>cybersecurity process</strong>—from spotting key details to reacting to the unfolding evidence—was incredibly rewarding. Their curiosity and willingness to participate highlighted just how <strong>impactful hands-on, immersive learning</strong> can be.</p>

    <p>Returning to the outreach office afterward, I reflected on how this event came together so quickly after the <strong>school visit</strong>. It was a reminder of how <strong>spontaneous opportunities</strong> can lead to some of the most memorable experiences. The chance to <strong>showcase cybersecurity skills</strong> in an interactive format, while collaborating with creative leads, was a highlight—and hopefully, it sparked some interest in <strong>tech and digital forensics</strong> among the students.</p>
    `},
    {id: "campus-tours", title: "Hosting Campus Tours", content: `
     <h2>Hosting Campus Tours for Prospective Students: A Look into the Cybersecurity and Networking Labs</h2>
    <p>As a computing student and mentor, one of my favorite opportunities was hosting campus tours for prospective students, giving them an inside look at what university life was really like. These tours weren’t just about walking through campus; they were about offering a glimpse into the world of computing and technology, showing how the university prepared students for real-world careers in fields like cybersecurity and computer networks.</p>

    <h3>The Excitement of Welcoming Future Cybersecurity Experts</h3>
    <p>When prospective students arrived, they were often eager to learn about the latest technologies, the campus environment, and the hands-on learning opportunities available to them. As we made our way through the campus, one of the first stops was always the <strong>Cybersecurity Lab</strong>. This state-of-the-art facility was where students like me explored everything from ethical hacking to security analysis, network protection, and real-time threat monitoring.</p>
    <p>During the tour, I took time to highlight some of the key equipment and software we used to prepare for cybersecurity challenges. From firewalls and intrusion detection systems to advanced penetration testing tools, the lab was equipped to simulate real-world scenarios where students could safely learn the ins and outs of digital security. It was incredible to see prospective students light up when they realized just how much they could accomplish in this space!</p>

    <h3>The Networking Labs: Building the Future of Connectivity</h3>
    <p>Next, we headed over to the <strong>Networking Lab</strong>, where the magic of computer networking came to life. Here, students practiced setting up, configuring, and troubleshooting networks that spanned local, wide, and global distances. From understanding the fundamental concepts of IP addressing and routing protocols to building complex, enterprise-level networks, the lab was an essential part of the learning process for any aspiring network engineer.</p>
    <p>As we walked through the lab, I shared some of the experiences I had working on networking projects, from setting up multi-layered networks to experimenting with wireless protocols and security measures. The real-world applications of the skills learned in this lab were vast, and many students were surprised by how closely the lab mirrored industry-standard practices.</p>

    <h3>Why These Labs Mattered</h3>
    <p>For prospective students, the <strong>Cybersecurity and Networking Labs</strong> were more than just classrooms — they were immersive environments that provided real-world experience. These labs were central to the university's approach to teaching and were key to preparing students for careers in tech. By showcasing these spaces, I hoped to give future students an idea of the level of expertise and hands-on training they could expect when they stepped onto campus.</p>
    <p>It was inspiring to see prospective students become more confident and excited about their future in tech as they explored the possibilities these labs offered. I often heard comments like, “This is exactly what I want to be doing!” or “I didn’t know these kinds of labs even existed!” It was always rewarding to witness their curiosity sparked by the cutting-edge technology and the chance to learn from experts in the field.</p>

    <h3>Looking Ahead: Shaping the Next Generation of Cybersecurity and Network Professionals</h3>
    <p>Hosting these campus tours was a fulfilling experience for me because it was a chance to share my journey, the skills I developed, and the exciting future that lay ahead in fields like cybersecurity and networking. As we concluded the tour, I encouraged prospective students to take advantage of all the opportunities offered there — to learn, grow, and build their careers in one of the most dynamic industries today.</p>
    <p>If you’re thinking about a career in tech, I highly recommend exploring what these labs had to offer. The university’s investment in top-tier labs and real-world learning experiences was something that set it apart from other institutions. The future of cybersecurity and networking was bright, and I was proud to be a part of it.</p>
    `}
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
