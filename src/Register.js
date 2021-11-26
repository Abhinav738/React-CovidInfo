import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div id="container-register">
                <div id="title">
                    <i class="material-icons lock">lock</i> Register
                </div>

                <form action="backend.php" method="POST" name="registration" onsubmit="return validateform()"></form>
                <div class="input">

                    <input id="fname" placeholder="Name" type="text" class="validate" autocomplete="off" name="fname"></input>
                </div>



                <div class="input">
                    <input id="lname" placeholder="Surname" type="text" required class="validate" autocomplete="off" name="lname"></input>
                </div>



                <div class="input">

                    <input id="email" placeholder="Email-id" type="email" required class="validate" autocomplete="off" name="email"></input>
                </div>
                <div class="input">

                    <input id="pass1" placeholder="Set Password" type="password" required class="validate" autocomplete="off" name="pass1"></input>
                </div>
                <div class="input">

                    <input id="pass2" placeholder="Type password again" type="password" required class="validate" autocomplete="off" name="pass1"></input>
                </div>
                <div class="input">

                    <input id="Roll" placeholder="Rollno." type="text" required class="validate" autocomplete="off" name="Rollno"></input>
                </div>
                <div class="input">

                    <input id="Branch" placeholder="Branch" type="text" required class="validate" autocomplete="off" name="Branch"></input>
                </div>
                <div class="input">

                    <input id="DOB" placeholder="DOB" type="text" required class="validate" autocomplete="off" name="DOB"></input>
                </div>


                <div>

                    <p>
                        MALE<input type="radio" name="gender" required name='MALE' value="M"></input>
                        FEMALE <input type="radio" name="gender" required name="FEMALE" value="F"></input>
                        OTHERS<input type="radio" name="gender" required name="other" value="O"></input>

                    </p>
                </div>


                <input type="submit" value="Register" name="submit" />





            </div>




        );
    }
}

export default Register;