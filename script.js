 document.getElementById("getStarted").addEventListener("click", function(){
    const email = document.getElementById("email").ariaValueMax.trim();
    if (email ===""){
        alert("Please enter your email address.");
    } else if(!email.includes("@")){
        alert("Please enter a valid email address.");
    }else{
        alert('Welcome to Netflix! Email: ${email}');
    }
    });

    document.getElementById("getStarted").addEventListener("click", () =>{
        alert("Redirecting to sign up page...");
         redirect:
        window.location.href= "https://www.netflix.com/signup";
    });

    const faqItems = document.querySelectorAll('.faq-item');

    faq-faqItems.forEach(item => {
        item.addEventListener('click', ()=>{
         // Close all other open
          FAQs  
faqItems.forEach(faq => {
    if (faq !== item) faq.classList.remove('active');
})

//Toggle the clicked
 FAQ
        });
    });

    const scrollBtn= document.getElementById("scrollTopBtn");

    window.onscroll= function(){
        if(this.document.body.scrollTop > 200 || this.document.documentElement.scrollTop> 200){
            scrollBtn.style.display="block";
        }else{
            scrollBtn.style.display="none";
        }
        };
    
        scrollBtn.onclick = function(){
            window.scrollTo({top: 0, behaviour: "smooth"});
        };

        //Optional simple interactivity
        document.getElementById("learn-more").addEventListener("click", (e) => {e.preventDefault();
            alert("This link would typically open Google's reCAPTCHA help page.");
        });