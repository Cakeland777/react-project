import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { useParams, Link } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class ReadBoard extends Component {

    constructor(props) {
        super(props);


        this.state = {
            no: this.props.params.no,
            board: {}
        }

    }


    componentDidMount() {
        BoardService.getOneBoard(this.state.no).then(res => {
            this.setState({ board: res.data });
        });
    }


    deleteView = async function () {
        if (window.confirm("정말 글을 삭제하시겠습니까?")) {
            BoardService.deleteBoard(this.state.no).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                if (res.status == 200) {
                    alert("삭제 완료!");
                    document.location.href = "/board";
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }




    goToList() {
        document.location.href = "/board";
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> 상세보기</h3>
                    <div className="card-body">


                        <div className="form-group">
                            <label>제목</label>
                            <input type="text" value={this.state.board.title} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label> 내용 </label>  <br></br>
                            <textarea value={this.state.board.content} className="form-control" />
                        </div >

                        <div className="form-group">
                            <label> 작성자  </label>
                            <input type="text" value={this.state.board.userid} className="form-control" />
                        </div>



                        <button className="btn btn-light" style={{ marginLeft: "10px", backgroundColor: 'salmon', color: 'white' }} onClick={() => this.deleteView()} >글 삭제</button>
                        <button className="btn btn-light" style={{ marginLeft: "10px", backgroundColor: 'plum' }}> <Link style={{ textDecoration: "none", color: 'white' }} to={{
                            pathname: `/updateboard/${this.state.board.no}`, state: {
                                no: `${this.state.board.no}`
                            }
                        }}>글 수정</Link></button>
                        <button className="btn btn-light" style={{ marginLeft: "10px", backgroundColor: 'lightpink' }}><Link to="/board" style={{ textDecoration: "none", color: 'white' }}>글 목록으로 이동</Link></button>
                    </div>
                </div>

            </div>
        );
    }
}

export default withParams(ReadBoard);
