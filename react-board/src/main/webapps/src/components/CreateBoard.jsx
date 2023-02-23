import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import BoardService from '../service/BoardService';
import { Link } from 'react-router-dom';

class CreateBoard extends Component {

    constructor(props) {
        super(props);


        this.state = {
            title: '',
            content: '',
            userid: sessionStorage.getItem("userid")
        }


        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }



    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentsHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    changeUserIdHandler = (event) => {
        this.setState({ userid: event.target.value });
    }


    createBoard = (event) => {
        event.preventDefault();
        let board = {

            title: this.state.title,
            content: this.state.content,
            userid: this.state.userid
        };
        console.log("board => " + JSON.stringify(board));
        BoardService.createBoard(board).then(res => {
            alert('게시글 등록 완료');
            document.location.href = "/board";
        });
    }




    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">게시글 작성</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> 제목 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> 내용  </label>
                                        <textarea placeholder="content" name="content" className="form-control"
                                            value={this.state.content} onChange={this.changeContentsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> 작성자  </label>
                                        <input placeholder="userid" name="userid" className="form-control"
                                            value={this.state.userid} />
                                    </div>
                                    <button className="btn btn-light" style={{ marginLeft: "10px", backgroundColor: 'lightskyblue', color: 'white' }} onClick={this.createBoard}>저장</button>
                                    <button className="btn btn-light" style={{ marginLeft: "10px", backgroundColor: 'lightcoral' }}><Link style={{ textDecoration: "none", color: 'white' }} to="/board">취소</Link></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateBoard;
