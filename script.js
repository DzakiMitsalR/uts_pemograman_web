function showPage(pageId) {

    const mainSections = document.querySelectorAll('.page-section');
    mainSections.forEach(section => {
        section.classList.add('d-none');
    });


    document.getElementById('steps-container').classList.add('d-none');

    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.classList.remove('d-none');
        activePage.classList.add('animate-fade-in');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRegistration(event) {
    event.preventDefault(); 
    
    document.getElementById('page-registrasi').classList.add('d-none');
    
    document.getElementById('steps-container').classList.remove('d-none');
    
    nextStep(1);
}

function nextStep(stepNumber) {
    const stepSections = document.querySelectorAll('.step-section');
    stepSections.forEach(section => {
        section.classList.add('d-none');
    });

    const currentStepSection = document.getElementById(`step-${stepNumber}`);
    if (currentStepSection) {
        currentStepSection.classList.remove('d-none');
        currentStepSection.classList.add('animate-fade-in');
    }
    for (let i = 1; i <= 5; i++) {
        const indicator = document.getElementById(`ind-${i}`);
        if (indicator) {
            if (i < stepNumber) {
                indicator.className = "step-indicator complete";
            } else if (i === stepNumber) {
                indicator.className = "step-indicator active";
            } else {
                indicator.className = "step-indicator";
            }
        }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetToHome() {
    document.getElementById('form-registrasi').reset();
    
    showPage('beranda');
}