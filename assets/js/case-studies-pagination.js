document.addEventListener('DOMContentLoaded', function() {

    const caseStudies = [
        {
            id: 1,
            image: 'assets/images/case-studies/image-1.jpg',
            alt: 'Offshore Drilling Team',
            date: '15 Mar 2024',
            category: 'Offshore Drilling',
            comments: 3,
            title: 'Successful Deployment of Offshore Drilling Team in North Sea Project',
            content: 'OGP successfully recruited and deployed a complete offshore drilling team for a major North Sea project. Our team sourced and placed 25 specialized personnel including drilling supervisors, toolpushers, and roustabouts, ensuring all certifications and safety requirements were met. The project was completed on schedule with zero safety incidents.',
            hasImage: true,
            isSlider: false,
            isVideo: false,
            isTestimonial: false
        },
        {
            id: 2,
            image: ['assets/images/case-studies/image-2.jpg', 'assets/images/case-studies/image-3.jpg', 'assets/images/case-studies/image-5.jpg'],
            alt: 'LNG Terminal',
            date: '05 Jan 2024',
            category: 'Project Management',
            comments: 4,
            title: 'Complete Project Team for 18-inch Trunk Line Project',
            content: 'OGP assembled a full project management and QA/QC team for the 18-inch trunk line construction project in a desert environment. Our recruitment process ensured all team members possessed the required certifications and experience in trunk line construction, contributing to the project\'s successful completion ahead of schedule.',
            hasImage: true,
            isSlider: true,
            isVideo: false,
            isTestimonial: false
        },
        {
            id: 3,
            image: ['assets/images/case-studies/image-6.jpg', 'assets/images/case-studies/image-7.jpg', 'assets/images/case-studies/image-8.jpg', 'assets/images/case-studies/image-9.jpg'],
            alt: 'Offshore Facilities Operation',
            date: '12 Feb 2024',
            category: 'Operations & Maintenance',
            comments: 2,
            title: 'Operation and Maintenance of Oil Terminals and Offshore Facilities',
            content: 'OGP successfully managed a comprehensive three-year project involving the operation and maintenance of oil terminals and offshore facilities. The project included operating the barge, tug boats, supply boats, and dredger with all personnel, maintenance activities planning, and underwater operations featuring two diving crews with supervisors, mooring masters, and offshore crane operators to operate and maintain the mooring system. The project involved 50+ personnel from different nationalities, ensuring seamless coordination and operational excellence.',
            hasImage: true,
            isSlider: true,
            isVideo: false,
            isTestimonial: false
        },
    ];

    const itemsPerPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

    const blogContent = document.querySelector('.blog-content');
    const paginationWrapper = document.querySelector('.pagination-wrapper');
    const paginationList = document.querySelector('.pg-pagination');

    function renderCaseStudies() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentCaseStudies = caseStudies.slice(startIndex, endIndex);

        const posts = blogContent.querySelectorAll('.post');
        posts.forEach(post => post.remove());

        currentCaseStudies.forEach(study => {
            const postDiv = document.createElement('div');
            postDiv.className = study.isTestimonial ? 'post testimonial' : 'post';

            let postHTML = '';

            if (study.hasImage) {
                postHTML += '<div class="entry-media">';
                if (study.isSlider) {
                    postHTML += '<div class="post-slider">';
                    study.image.forEach(img => {
                        postHTML += `<img src="${img}" alt="${study.alt}">`;
                    });
                    postHTML += '</div>';
                } else if (study.isVideo) {
                    postHTML += '<div class="video-holder">';
                    postHTML += `<img src="${study.image}" alt="${study.alt}">`;
                    postHTML += '</div>';
                } else {
                    postHTML += `<img src="${study.image}" alt="${study.alt}" style="width: 100%; height: 100%; object-fit: cover;">`;
                }
                postHTML += '</div>';
            }

            postHTML += '<div class="entry-content">';
            
            if (study.isTestimonial) {
                postHTML += '<blockquote>';
                postHTML += `<h3>${study.title}</h3>`;
                postHTML += `<p>${study.content}</p>`;
                postHTML += '</blockquote>';
            } else {
                postHTML += '<ul class="entry-meta">';
                postHTML += `<li><a href="#"><i class="ti-time"></i> ${study.date}</a></li>`;
                postHTML += `<li><a href="#"><i class="ti-book"></i> ${study.category}</a></li>`;
                postHTML += `<li><a href="#"><i class="ti-comment-alt"></i> ${study.comments}</a></li>`;
                postHTML += '</ul>';
                postHTML += `<h3><a href="#">${study.title}</a></h3>`;
                postHTML += `<p>${study.content}</p>`;
                postHTML += '<a href="#" class="theme-btn">Read More</a>';
            }
            
            postHTML += '</div>';

            postDiv.innerHTML = postHTML;
            blogContent.insertBefore(postDiv, paginationWrapper);
        });

        if (window.$ && $('.post-slider').length) {
            $('.post-slider').owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: false,
                navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>']
            });
        }
    }

    function renderPagination() {
        paginationList.innerHTML = '';

        const prevLi = document.createElement('li');
        prevLi.innerHTML = `
            <a href="#" aria-label="Previous" ${currentPage === 1 ? 'class="disabled"' : ''}>
                <i class="fi flaticon-back"></i>
            </a>
        `;
        if (currentPage > 1) {
            prevLi.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                currentPage--;
                renderCaseStudies();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        paginationList.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const pageLi = document.createElement('li');
            pageLi.className = i === currentPage ? 'active' : '';
            pageLi.innerHTML = `<a href="#">${i}</a>`;
            
            pageLi.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderCaseStudies();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            paginationList.appendChild(pageLi);
        }
        
        const nextLi = document.createElement('li');
        nextLi.innerHTML = `
            <a href="#" aria-label="Next" ${currentPage === totalPages ? 'class="disabled"' : ''}>
                <i class="fi flaticon-next"></i>
            </a>
        `;
        if (currentPage < totalPages) {
            nextLi.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                currentPage++;
                renderCaseStudies();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        paginationList.appendChild(nextLi);
    }

    renderCaseStudies();
    renderPagination();
}); 