document.addEventListener('DOMContentLoaded', function() {
    const aboutwe = document.getElementById('scrollButton'); // Assuming this button is meant to scroll to the element with the "about-we" ID
    const servicebutton = document.getElementById('serive-button'); 
    const servicesection = document.getElementById('service-section');
    const myaboutwe = document.getElementById('about-we');
    const teamdev = document.getElementById('team-dev');
    const myteam = document.getElementById('myteam-dev');

    aboutwe.addEventListener('click', function() {
        // Scroll to the 'about-we' element
        myaboutwe.scrollIntoView({ behavior: 'smooth' });
    });

    servicebutton.addEventListener('click', function() {
        // Scroll to the 'service-section' element
        servicesection.scrollIntoView({ behavior: 'smooth' });
    });

    teamdev.addEventListener('click', function() {
        // Scroll to the 'service-section' element
        myteam.scrollIntoView({ behavior: 'smooth' });
    });
});

// hammenu
// function toggleHam(x) {
//     x.classList.toggle("change");
//     let myMenu = document.getElementById('myNavbar');
//     if(myMenu.className === 'navbar'){
//         myMenu.className += 'menu-active'
//     } else {
//         myMenu.className = 'navbar'
//     }
// }

function toggleHam(x) {
    x.classList.toggle("change");
    let myMenu = document.getElementById('myNavbar');
    if (myMenu.classList.contains('menu-active')) {
        myMenu.classList.remove('menu-active');
    } else {
        myMenu.classList.add('menu-active');
    }
}
