import React, { Component} from 'react';

import MemberService from '../service/MemberService';


class CreateMember extends Component {
    
    constructor(props) {
        super(props);

    
        this.state = {
           
            userid: '',
            passwd: '',
            email: '',
            phone: '',
            name: ''
        }

        this.changeUseridHandler = this.changeUseridHandler.bind(this);
        this.changePasswdHandler = this.changePasswdHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.createMember = this.createMember.bind(this);
    }


 
    changeUseridHandler = (event) => {
        this.setState({userid: event.target.value});
    }
    changePasswdHandler = (event) => {
        this.setState({passwd: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
  
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
  
    cancel=(event) => {
        event.preventDefault();
        document.location.href = "/";
	}
    createMember = (event) => {
        event.preventDefault();
        let member = {
            userid:  this.state.userid,
            passwd: this.state.passwd,
            email:this.state.email,
            phone: this.state.phone,
            name: this.state.name
         
        };
        console.log("member => "+ JSON.stringify(member));
        MemberService.createMember(member).then(res => {
            alert('가입성공!');
            document.location.href = "/login";
        });
    }
    
   
 

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">회원가입</h3>
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
                                    <div className = "form-group">
                                        <label> 이름  </label>
                                        <input placeholder="이름" name="name" className="form-control" 
                                        value={this.state.name}  onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> 이메일  </label>
                                        <input placeholder="이메일" name="email" className="form-control" 
                                        value={this.state.email}  onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 전화번호  </label>
                                        <input placeholder="전화번호" name="phone" className="form-control" 
                                        value={this.state.phone}  onChange={this.changePhoneHandler}/>
                                    </div>
                                    <button  className= "btn btn-light"  style={{marginLeft:"10px" ,backgroundColor:'lightskyblue',color:'white'}} onClick={this.createMember}>가입하기</button>
                                    <button className="btn btn-light"  onClick={this.cancel}  style={{marginLeft:"10px" ,backgroundColor:'lightcoral' ,color:'white'}}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateMember;
