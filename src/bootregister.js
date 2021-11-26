import React, { Component } from "react";

class bootregister extends Component {
    render() {
        return (
            <form>

                <div class="mb-3">
                    <label for="exampleInputEmail1" Nameclass="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" Nameclass="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" Nameclass="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                        vaccinated
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                    <label class="form-check-label" for="flexCheckChecked">
                        Not Vaccinated
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        );
    }
}

export default bootregister;