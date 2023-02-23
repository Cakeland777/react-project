package com.douzone.react;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

	@Autowired
	private BoardService boardService;

	// get all board
	@GetMapping("/board")
	public List<BoardVO> getAllBoards() {

		return boardService.getAllBoard();
	}

	@PostMapping("/board")
	public BoardVO createBoard(@RequestBody BoardVO board) {
		return boardService.createBoard(board);
	}

	@GetMapping("/board/{no}")
	public ResponseEntity<BoardVO> getBoardByNo(@PathVariable int no) {

		return boardService.getBoard(no);
	}

	@PutMapping("/board/{no}")
	public ResponseEntity<BoardVO> updateBoardByNo(@PathVariable int no, @RequestBody BoardVO board) {

		return boardService.updateBoard(no, board);
	}

	@DeleteMapping("/board/{no}")
	public ResponseEntity<Map<String, Boolean>> deleteBoardByNo(@PathVariable int no) {

		return boardService.deleteBoard(no);
	}

}
