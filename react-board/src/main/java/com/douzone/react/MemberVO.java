package com.douzone.react;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "reactmember")
@Data

public class MemberVO {

	@Id
	@Column(name = "userid")
	private String userid;

	@Column(name = "passwd")
	private String passwd;

	@Column(name = "phone")
	private String phone;

	@Column(name = "email")
	private String email;

	@Column(name = "name")
	private String name;
}
