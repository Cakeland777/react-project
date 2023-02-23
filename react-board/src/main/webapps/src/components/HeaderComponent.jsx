import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: "",

        }
    }
    componentDidMount() {
        if (sessionStorage.getItem("userid") === null) {

        } else {
            this.setState({ isLogin: "1" });
        

        }

    }
    clearStorage = (event) => {
        event.preventDefault();

        sessionStorage.clear();
        alert('로그아웃 되었습니다');
        document.location.href = "/";

    }

    render() {
        return (
            <div>
                <header > 

                    <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: 'pink' }}>
                        <div><a href="http://localhost:3000" className="navbar-brand" style={{ color: 'white' ,fontWeight:'bold'}}> 메인</a></div>

                        {this.state.isLogin === "1" ? (
                            <><Link to={{ pathname: `/mypage/${sessionStorage.getItem("userid")}` }} style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}}  className="nav-link text-white">
                                마이페이지 </Link>
                                <div>   <Link style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}} onClick={this.clearStorage}>로그아웃</Link></div>
                                <div><Link to="/board" style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}}  >게시판</Link></div>
                            </>

                        ) : (
                            <>
                                <div><Link to="/login" style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}}  >로그인</Link></div>
                                <div><Link to="/createmember" style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}}  >회원가입</Link></div>
                            </>
                        )}

                        <div><Link to="/help" style={{ textDecoration: "none", color: 'white', margin: 5 ,fontWeight:'bold'}}  >HELP</Link></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
