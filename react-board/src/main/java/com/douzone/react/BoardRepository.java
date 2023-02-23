package com.douzone.react;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardVO, Integer> {

	List<BoardVO> findTop10ByOrderByNoDesc();
}
