import React, { Component } from 'react';
import MemberService from '../service/MemberService';
import {Link} from 'react-router-dom';

class Login extends Component {
    
    constructor(props) {
        super(props);

    
        this.state = {
            userid: '',
            passwd: ''

        }

  
        this.changeUseridHandler = this.changeUseridHandler.bind(this);
        this.changePasswdHandler = this.changePasswdHandler.bind(this);

        this.loginMember = this.loginMember.bind(this);
    }


 
    changeUseridHandler = (event) => {
        this.setState({userid: event.target.value});
    }
    changePasswdHandler = (event) => {
        this.setState({passwd: event.target.value});
    }
 
   
    loginMember = (event) => {
        event.preventDefault();
       
        MemberService.loginMember(this.state.userid,this.state.passwd).then((res) => {
            if(res.data !== "" || res.data  !== null || res.data !== undefined ){
                sessionStorage.setItem("userid", this.state.userid); 
                document.location.href = "/";    
                alert("로그인 성공");
            }
            else  {
               alert("로그인 실패");
            }
        });
    }

   
 

    render() {
        return (
            <div>
                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">로그인</h3>
                            <div className = "card-body">
                                <form>
                          
                                    <div className = "form-group">
                                        <label> 아이디</label>
                                        <input type="text" placeholder="아이디" name="userid" className="form-control" 
                                        value={this.state.userid} onChange={this.changeUseridHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 비밀번호  </label>
                                        <input type="text"  placeholder="비밀번호" name="passwd" className="form-control" 
                                        value={this.state.passwd} onChange={this.changePasswdHandler}/>
                                    </div>
                                
                                    <button  className= "btn btn-light"  style={{marginLeft:"10px" ,backgroundColor:'lightskyblue',color:'white'}} onClick={this.loginMember}>로그인</button>
                                    <button className="btn btn-light"   style={{marginLeft:"10px" ,backgroundColor:'lightcoral'}}><Link style={{ textDecoration: "none" ,color:'white'}} to="/">취소</Link></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
