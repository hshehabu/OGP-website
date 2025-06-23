document.addEventListener('DOMContentLoaded', function() {

    const projects = [
        {
            title: 'Assessor Training - CMS',
            description: 'Comprehensive Assessor Training for Competency Management Systems (CMS) to ensure workforce competence and safety.',
            scope: ['Training Material Development', 'On-site Workshops', 'Digital Assessment Tools', 'Competency Verification'],
            achievements: [
                'Trained and certified 50+ assessors.',
                'Streamlined CMS, 30% faster assessments.',
                'Achieved 98% participant pass rate.'
            ]
        },
        {
            title: 'Workshop',
            description: 'Conducted a series of technical and safety workshops for subsea engineering teams.',
            scope: ['Hands-on Equipment Training', 'Advanced Safety Protocols', 'Emergency Response Drills', 'Team Collaboration Exercises'],
            achievements: [
                'Enhanced team operational efficiency by 25%.',
                'Reduced safety incidents by 40% in following quarter.',
                'Received outstanding feedback for practical approach.'
            ]
        },
        {
            title: 'Mobilisation / E2 Jumper Installation',
            description: 'Managed the full mobilization and installation of E2 Jumper equipment for a critical offshore platform.',
            scope: ['Logistics and Planning', 'Vessel Preparation', 'Subsea Jumper Installation', 'System Integration and Testing'],
            achievements: [
                'Completed project 2 days ahead of schedule.',
                'Executed installation with zero LTIs.',
                'Ensured seamless integration with existing infrastructure.'
            ]
        },
        {
            title: 'IRM - CPT',
            description: 'Performed Inspection, Repair, and Maintenance (IRM) using Cone Penetration Testing (CPT) for seabed analysis.',
            scope: ['Geotechnical Investigation', 'CPT Data Acquisition', 'Structural Integrity Assessment'],
            achievements: [
                'Provided critical data for new platform foundation design.',
                'Identified and mitigated potential geohazards.',
                'Delivered final report with actionable insights on time.'
            ]
        },
        {
            title: 'Pre-P&A / SubSea Structure',
            description: 'Executed pre-plug and abandonment (P&A) operations on the K5-F structure and other subsea assets.',
            scope: ['Well-bore cleanup', 'Structural severance', 'Debris removal', 'Environmental compliance checks'],
            achievements: [
                'Safely prepared 5 wells for final abandonment.',
                'Minimized environmental impact.',
                'Completed operations under budget and on schedule.'
            ]
        },
        {
            title: 'ROV – Pre Piling Works',
            description: 'Utilized Remotely Operated Vehicles (ROVs) for pre-piling works, ensuring accurate foundation placement for a new offshore wind farm.',
            scope: ['Seabed survey and clearance', 'ROV-assisted piling guidance', 'Post-piling inspection', 'Real-time video feedback'],
            achievements: [
                'Achieved sub-centimeter accuracy for all pile installations.',
                'Reduced diver reliance, enhancing operational safety.',
                'Completed 10 sq km survey and clearance in record time.'
            ]
        }
    ];

    let currentProjectIndex = 0;

    const timelineContainer = document.getElementById('experience-timeline');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectScopeList = document.getElementById('project-scope-list');
    const projectAchievementsList = document.getElementById('project-achievements-list');
    const prevButton = document.querySelector('.experience-nav.prev');
    const nextButton = document.querySelector('.experience-nav.next');

    function populateTimeline() {
        timelineContainer.innerHTML = '';
        projects.forEach((_, index) => {
            const step = document.createElement('div');
            step.classList.add('timeline-step');
            step.textContent = index + 1;
            step.dataset.index = index;
            step.addEventListener('click', () => {
                currentProjectIndex = index;
                updateProjectDisplay();
            });
            timelineContainer.appendChild(step);
        });
    }

    function updateProjectDisplay() {
        const project = projects[currentProjectIndex];

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;

        projectScopeList.innerHTML = '';
        project.scope.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('technology-tag');
            li.textContent = item;
            projectScopeList.appendChild(li);
        });

        projectAchievementsList.innerHTML = '';
        project.achievements.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('achievement-item');
            li.innerHTML = `<div class="achievement-icon"></div><p>${item}</p>`;
            projectAchievementsList.appendChild(li);
        });

        const steps = timelineContainer.querySelectorAll('.timeline-step');
        steps.forEach((step, index) => {
            if (index === currentProjectIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        updateProjectDisplay();
    });

    nextButton.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateProjectDisplay();
    });

    populateTimeline();
    updateProjectDisplay();
}); 