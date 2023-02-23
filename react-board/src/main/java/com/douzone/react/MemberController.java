package com.douzone.react;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MemberController {

	@Autowired
	private MemberService memberService;

	@GetMapping("/member")
	public List<MemberVO> getAllBoards() {

		return memberService.getAllMember();
	}

	@PostMapping("/member")
	public MemberVO createMember(@RequestBody MemberVO member) {
		return memberService.createMember(member);
	}

	@GetMapping("/member/{userid}")
	public ResponseEntity<MemberVO> getMemberByUserid(@PathVariable String userid) {

		return memberService.getMember(userid);
	}

	@PostMapping("/member/login")
	public String LoginMember(@RequestBody MemberVO member) {
		return memberService.findMember(member);
	}

}
