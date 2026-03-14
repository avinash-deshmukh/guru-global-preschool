const scriptURL = "https://script.google.com/macros/s/AKfycbyutzPC8whyeeWpkcoJ2ZlhE9bfSKluFz4rJRNW7x8KxVpZ2NI9wgzXe5r99V37koJw/exec";

function connectForm(formId){

    const form = document.getElementById(formId);
    
    if(!form) return;
    
    form.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    const submitBtn = form.querySelector("#submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";
    
    const formData = {
    
    name: form.querySelector('[name="name"]').value,
    childname: form.querySelector('[name="childname"]').value,
    childage: form.querySelector('[name="childage"]').value,
    phone: form.querySelector('[name="phone"]').value,
    email: form.querySelector('[name="email"]').value,
    program: form.querySelector('[name="program"]').value,
    message: form.querySelector('[name="message"]').value
    
    };
    
    fetch(scriptURL,{
    method:"POST",
    body:JSON.stringify(formData)
    })
    .then(res=>res.text())
    .then(data=>{
    
    const successMsg = form.querySelector("#contact-success");
    
    if(successMsg){
    successMsg.classList.remove("hidden");
    
    setTimeout(()=>{
    successMsg.classList.add("hidden");
    },5000);
    }
    
    form.reset();
    
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Enquiry";
    
    })
    .catch(err=>{
    
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Enquiry";
    
    });
    
    });
    
    }
    
    connectForm("home-enquiry-form");
    connectForm("contact-form");

/* Google Review Slider */

const reviewSlider = document.getElementById("review-slider");

if(reviewSlider){

let scrollAmount = 0;

let autoScroll = setInterval(scrollReviews,30);

function scrollReviews(){

scrollAmount += 0.5;

if(scrollAmount >= reviewSlider.scrollWidth/2){
scrollAmount = 0;
}

reviewSlider.scrollLeft = scrollAmount;

}

reviewSlider.addEventListener("mouseenter",()=>{
clearInterval(autoScroll);
});

reviewSlider.addEventListener("mouseleave",()=>{
autoScroll = setInterval(scrollReviews,30);
});

}