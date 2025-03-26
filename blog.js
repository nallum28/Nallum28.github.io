document.addEventListener("DOMContentLoaded", () => {
    const postsPerPage = 2;
    let currentPage = 1;
    
    const posts = [
        { id: "stewarding", title: "Reflections on My First Stewarding Shift", content: "It was a great learning experience..." },
        { id: "cyber-conference", title: "Hosting a Cyber Conference: What I Learned", content: "Organizing a conference is tough, but..." },
        { id: "school-workshops", title: "Teaching Cybersecurity to School Kids", content: "I designed a fun workshop where..." },
        { id: "school-visits", title: "Showcasing My Degree to Schools", content: "Visiting schools was an eye-opener..." },
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
