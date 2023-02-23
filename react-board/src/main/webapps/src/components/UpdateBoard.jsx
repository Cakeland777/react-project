import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import BoardService from '../service/BoardService';
import {Link,useParams} from 'react-router-dom';
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class UpdateBoard extends Component {
    
    constructor(props) {
        super(props);

    
        this.state = {
            no:  this.props.params.no,
            title: '',
            content: '',
            userid: ''


        }

  
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }


 
    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeContentsHandler = (event) => {
        this.setState({content: event.target.value});
    }
  
    changeUserIdHandler = (event) => {
        this.setState({userid: event.target.value});
    }
  
   
    createBoard = (event) => {
        event.preventDefault();
        const board = {
            title: this.state.title,
            content: this.state.content,
            userid: this.state.userid
        };
        console.log("board => "+ JSON.stringify(board));
            BoardService.updateBoard(this.state.no, board).then(res => {
                document.location.href = "/board";
            });
        
    }


    cancel=(event) => {
        event.preventDefault();
        document.location.href = "/board";
	}
    componentDidMount() {
       
            BoardService.getOneBoard(this.state.no).then( (res) => {
                const board = res.data;
                this.setState({
                        title: board.title,
                        content: board.content,
                        userid: board.userid
                    });
            });
        }
    




 

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">게시글 수정</h3>
                            <div className = "card-body">
                                <form>
                          
                                    <div className = "form-group">
                                        <label> 제목 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 내용  </label>
                                        <textarea placeholder="content" name="content" className="form-control" 
                                        value={this.state.content} onChange={this.changeContentsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 작성자  </label>
                                        <input placeholder="userid" name="userid" className="form-control" 
                                        value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                    </div>
                                    <button className="btn btn-light" style={{marginLeft:"10px" ,backgroundColor:'lightskyblue',color:'white'}} onClick={this.createBoard}>저장</button>
                                    <button className="btn btn-light"  onClick={this.cancel}  style={{marginLeft:"10px" ,color:'white',backgroundColor:'lightpink'}}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withParams(UpdateBoard);
