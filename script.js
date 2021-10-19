const container = document.getElementsByClassName("container")[0];
container.innerHTML=`<h2> Register  </h2>
<form class="form" onsubmit="event.preventDefault()">
            <div class="form-control">
                <label for="fullName">FullName</label>
                <input type="text" id="fullName" placeholder="Enter your name">
                
            </div>
            <div class="form-control">
                <label for="userName">UserName</label>
                <input type="text" id="userName" placeholder="Enter Username">
                
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter your Email">
                
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password">
                
            </div>
            <div class="form-control">
                <label for="password2">Password2</label>
                <input type="password" id="password2" placeholder="Enter New Password">
                
            </div>
            <button class="button" id="btn">Register</button>
        </div>
        </form>`
       
        
        
        btn.addEventListener("click",(e)=>{
            const fullName =document.getElementById("fullName").value;
        const userName =document.getElementById("userName").value;
        const mail =document.getElementById("email").value;
        const password =document.getElementById("password").value;
        const password2 =document.getElementById("password2").value;
            console.log(fullName);
            console.log(userName);
            console.log(mail);
            console.log(password);
            console.log(password2);
        });

      
