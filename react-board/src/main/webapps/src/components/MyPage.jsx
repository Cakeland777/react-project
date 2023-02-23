import React, { Component } from 'react';

import MemberService from '../service/MemberService';
import {useParams} from 'react-router-dom';
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class MyPage extends Component {
    
    constructor(props) {
        super(props);

    
        this.state = {
           
            userid:this.props.params.userid,
            member:{}
        }

        this.changeUseridHandler = this.changeUseridHandler.bind(this);
        this.changePasswdHandler = this.changePasswdHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
       
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
  
    componentDidMount() {
        MemberService.getOneMember(this.state.userid).then( res => {
            this.setState({member: res.data});
        });
       
    }
   
    cancel=(event) => {
        event.preventDefault();
        document.location.href = "/board";
	}

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">회원정보</h3>
                            <div className = "card-body">
                                <form>
                          
                                    <div className = "form-group">
                                        <label> 아이디</label>
                                        <input type="text" placeholder="아이디" name="userid" className="form-control" 
                                        value={this.state.member.userid} onChange={this.changeUseridHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 비밀번호  </label>
                                        <input type="text"  placeholder="비밀번호" name="passwd" className="form-control" 
                                        value={this.state.member.passwd} onChange={this.changePasswdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 이름  </label>
                                        <input placeholder="이름" name="name" className="form-control" 
                                        value={this.state.member.name}  onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> 이메일  </label>
                                        <input placeholder="이메일" name="email" className="form-control" 
                                        value={this.state.member.email}  onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 전화번호  </label>
                                        <input placeholder="전화번호" name="phone" className="form-control" 
                                        value={this.state.member.phone}  onChange={this.changePhoneHandler}/>
                                    </div>
                                    
                                    <button className="btn btn-light"  onClick={this.cancel}  style={{ color:'white',marginLeft:"10px" ,backgroundColor:'lightcoral'}}>돌아가기</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withParams(MyPage);
