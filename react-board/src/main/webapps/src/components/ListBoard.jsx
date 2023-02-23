import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
class ListBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }


    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data });
        });
    }






    render() {
        return (

            <div>
                <h2 className="text-center">게시판</h2>
                <div className="row">
                    <button className="btn btn-light" style={{ backgroundColor: 'lightcoral' }} ><Link to="/createboard" style={{ textDecoration: "none", color: 'white',fontWeight:'bold' }} >글 작성</Link>
                    </button>
                </div>


                <div className="row">
                    <table className="table  table-bordered" style={{  backgroundColor: 'mistyrose', color: 'grey' ,textAlign:'center'}}>
                        <thead>
                            <tr style={{ color: 'grey' }}>
                                <th>글 번호</th>
                                <th>제목 </th>
                                <th>작성자 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board =>
                                        <tr key={board.no}>
                                            <td> {board.no} </td>
                                            <td> <Link style={{ textDecoration: "none" }} to={{
                                                pathname: `/readboard/${board.no}`, state: {
                                                    no: `${board.no}`
                                                }
                                            }}>{board.title}</Link></td>
                                            <td> {board.userid} </td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default ListBoard;
