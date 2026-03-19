// responsive carousel-cube
function classChanges() {
    if(window.innerWidth <= 766){
        document.getElementById('layer-1').classList.add('cube-small');
        document.getElementById('layer-2').classList.add('cube-small');

        // переробити на ерей з назвами класів та подвійний цикл
        for (let i = 0; i < document.getElementsByClassName('back-big').length; i++){
            document.getElementsByClassName('back-big')[i].classList.add('back-small');
        }

        for (let i = 0; i < document.getElementsByClassName('right-big').length; i++){
            document.getElementsByClassName('right-big')[i].classList.add('right-small');
        }

        for (let i = 0; i < document.getElementsByClassName('window-big').length; i++){
            document.getElementsByClassName('window-big')[i].classList.add('window-small');
        }

        for (let i = 0; i < document.getElementsByClassName('table-class-big').length; i++){
            document.getElementsByClassName('table-class-big')[i].classList.add('table-class-small');
        }

    } else {
        document.getElementById('layer-1').classList.remove('cube-small');
        document.getElementById('layer-2').classList.remove('cube-small');

        for (let i = 0; i < document.getElementsByClassName('back-big').length; i++){
            document.getElementsByClassName('back-big')[i].classList.remove('back-small');
        }

        for (let i = 0; i < document.getElementsByClassName('right-big').length; i++){
            document.getElementsByClassName('right-big')[i].classList.remove('right-small');
        }

        for (let i = 0; i < document.getElementsByClassName('window-big').length; i++){
            document.getElementsByClassName('window-big')[i].classList.remove('window-small');
        }

        for (let i = 0; i < document.getElementsByClassName('table-class-big').length; i++){
            document.getElementsByClassName('table-class-big')[i].classList.remove('table-class-small');
        }
    }
}
addEventListener("resize", (event) => { classChanges(); })
if (window.innerWidth <= 766) { classChanges() }

//soft skills
const flashlight = document.getElementById('flashlight');
const softSkills = document.getElementById('soft-skills');

window.addEventListener('click', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    var rect = softSkills.getBoundingClientRect();
    const softSkillsX = rect.left + rect.width / 2;
    const softSkillsY = rect.bottom + rect.height / 2;

    const angleDev = angle(mouseX, mouseY, softSkillsX, softSkillsY);

    flashlight.style.transform = `rotate(${90 + angleDev}deg)`;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}


// graph
var data = {
    labels: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'C#', 'React', 'Node.js', 'SQL'],
            datasets: [{
            data: [19, 18, 16, 15, 13, 10, 10, 13],
                borderWidth: 1,
                backgroundColor: '#0d6efd',
                hoverBackgroundColor: "#0d6efd85",
            }]
    }

var options = {
    maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                beginAtZero: true
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

const skillsMd = document.getElementById('skills-md');
const skillsSm = document.getElementById('skills-sm');


new Chart(skillsMd, {
    type: 'bar',
    data: data,
    options: options
    });

new Chart(skillsSm, {
    type: 'bar',
    data: data,
    options: options
    });

//contact form
const form = document.getElementById('contact-form')
const toastTrigger = document.getElementById('liveToastBtn')
const toastLive = document.getElementById('liveToast')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)
    toastBootstrap.show()
})  