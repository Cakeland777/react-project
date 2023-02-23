package com.douzone.react;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "reactboard")
@SequenceGenerator(name = "B_SEQ_GEN", sequenceName = "B_SEQ", allocationSize = 1)
@Data
public class BoardVO {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "B_SEQ_GEN")
	private int no;

	@Column(name = "title")
	private String title;

	@Column(name = "content")
	private String content;

	@Column(name = "userid")
	private String userid;
	private String createdate;
}
