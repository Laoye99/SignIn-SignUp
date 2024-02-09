<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign In Form</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://kit.fontawesome.com/c3c673f20a.js" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    </head>
    <body>

        <input type="hidden" id="status" value = "<%= request.getAttribute("status")%>">
        <div class="container">
        <div class="form-box">
        <h1 id="title">Sign In</h1>
        <form method="post" action="signin" class="register-form" id="signin-form">
            <div class="input-group">
                <div class="input-field" id="nameField">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Username" name="name">
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password" name="password">
                </div>
                <p>Lost Password? <a href="#">Click Here !</a></p>

                <p>Not Registered? <a href="sign-up.jsp">Click Here !</a></p>
            
            </div>
            <div class="btn-field">
                <input type="submit" id="signin" value="Sign In" name="signin">
            </div>
            
        </form>
        </div>
        </div>
        <script>
            
            var status = document.getElementById('status').value;
	        if(status == "failed"){
	        	swal("Sorry","Wrong Username or Password","error");
	        }
	        if(status == "invalidUname"){
	        	swal("Sorry","Please Input Username","error");
		        }
	        if(status == "invalidUpwd"){
	        	swal("Sorry","Please Input Password","error");
		        }
	        if(status == "success"){
	    		swal("Welcome","You Have Logged In Successfully","success");
	    	}
	    	
           
        </script>
    </body>
</html>