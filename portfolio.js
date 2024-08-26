window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let imageFly = document.querySelector('.image-fly');
    let imageSlide = document.querySelector('.image-slide'); 
    
    // Adjust the speed of the parallax effect
    imageFly.style.transform = `translateY(${scrollPosition * 1}px) `;

    imageSlide.style.transform = `translateX(${scrollPosition * 1.4}px)`;
})


document.querySelectorAll('.main-list-link').forEach(item => {
    item.addEventListener('mouseover', event => {
        // Remove 'active' class from all .list-link elements
        document.querySelectorAll('.list-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the corresponding .list-link element
        const target = event.currentTarget.getAttribute('data-target');
        document.querySelector(`.about-me-list-${target}`).classList.add('active');
    });
});

const form = document.querySelector('.input-container');
const fullName = document.getElementById('name');
const email = document.getElementById('email')
const message = document.getElementById('message');
function sendEmail(){
    
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${Email.value}<br> Message: ${message.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jsh.seguerra@gmail.com",
        Password : "D13A7F52A29BB23DEF6515011F8D3C3D5B10",
        To : 'jsh.seguerra@gmail.com',
        From :'jsh.seguerra@gmail.com',
        Subject :"Submitted from portfolio",
        Body : bodyMessage
    }).then(
      message => alert('Thankyou!')
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})

        
       
   
