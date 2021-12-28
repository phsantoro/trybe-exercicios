const header = document.getElementById("header-container");
header.style.backgroundColor = 'rgb(0, 176,105)';

const section = document.getElementsByTagName("section")[0];
section.style.backgroundColor = 'rgb(255, 159, 132)'

const section2 = document.getElementsByTagName("section")[1];
section2.style.backgroundColor = 'rgb(249, 219, 94)'

const fundoH3Emergency = document.querySelectorAll('.emergency-tasks h3');
for ( let i = 0; i < fundoH3Emergency.length; i += 1) {
    fundoH3Emergency[i].style.backgroundColor = 'rgb(165, 0, 243)'
}

const fundoH3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for ( let i = 0; i < fundoH3NoEmergency.length; i += 1) {
    fundoH3NoEmergency[i].style.backgroundColor = 'rgb(35, 37, 37)'
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';