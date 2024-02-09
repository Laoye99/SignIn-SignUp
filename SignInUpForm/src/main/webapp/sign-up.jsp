<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sign Up Form</title>
        <script src="https://kit.fontawesome.com/c3c673f20a.js" crossorigin="anonymous"></script>
         <link rel="stylesheet" href= "css/style.css">
         <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    </head>
    <body>
       <input type="hidden" id="status" value ="<%= request.getAttribute("status") %>">

        <div class="container">
        <div class="form-box">
        <h1 id="title">Sign Up</h1>
        <form method="post" action="register" class="register-form" id="register-form">
            <div class="input-group">
                <div class="input-field" id="nameField">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Username" name="name" id="name" onkeyup="validateName()"/>
                    <span id="name-error"></span>
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email" name="email" id="email" onkeyup="validateEmail()" />
                    <span id="email-error"></span>
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password" name="pass" id="pass" onkeyup="validatePassword()" />
                    <span id="password-error"></span>
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Reconfirm Password" name="re_pass" id="re-pass" onkeyup="validateRePassword()"/>
                    <span id="repassword-error"></span>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-phone"></i>
                    <input type="text" placeholder="Contact" name="contact" id="contact" onkeyup="validateContact()"/>
                    <span id="contact-error"></span>
                </div>
            </div>
            <div class="btn-field">
                <input type="submit" id="signup" value="Sign Up" class= "form-submit" name="signup" onclick="return validateForm()">
            
                </div>
            
        </form>
        </div>
        </div>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="script/script1.js"></script>
	
	<script type="text/javascript">
	
	var status = document.getElementById("status").value;
	if(status == "success"){
		swal("Congrats","Account Created Successfully","success");
	}
	
	</script>

    </body>
</html>