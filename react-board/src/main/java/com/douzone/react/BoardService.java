package com.douzone.react;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;

	public List<BoardVO> getAllBoard() {
		return boardRepository.findTop10ByOrderByNoDesc();

	}

	public BoardVO createBoard(BoardVO board) {
		return boardRepository.save(board);
	}

	public ResponseEntity<BoardVO> getBoard(int no) {
		BoardVO board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
		return ResponseEntity.ok(board);
	}

	public ResponseEntity<Map<String, Boolean>> deleteBoard(int no) {
		BoardVO board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));

		boardRepository.delete(board);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted Board Data by id : [" + no + "]", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	public ResponseEntity<BoardVO> updateBoard(int no, BoardVO updatedBoard) {
		BoardVO board = boardRepository.findById(no)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
		board.setTitle(updatedBoard.getTitle());
		board.setContent(updatedBoard.getContent());
		board.setUserid(updatedBoard.getUserid());

		BoardVO endUpdatedBoard = boardRepository.save(board);
		return ResponseEntity.ok(endUpdatedBoard);
	}

}
