package com.douzone.react;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

	@Autowired
	private MemberRepository memberRepository;

	public List<MemberVO> getAllMember() {
		return memberRepository.findAll();
	}

	public MemberVO createMember(MemberVO member) {
		return memberRepository.save(member);
	}

	public String findMember(MemberVO member) {
		MemberVO members = memberRepository.findByUseridAndPasswd(member.getUserid(), member.getPasswd());
		String id = members.getUserid();

		return id;
	}

	public ResponseEntity<MemberVO> getMember(String userid) {
		MemberVO member = memberRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + userid + "]"));

		return ResponseEntity.ok(member);
	}
}
