package com.douzone.react;


import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberVO, String> {

	MemberVO findByUseridAndPasswd(String userid, String passwd);

	MemberVO findByUserid(String userid);

	

}
