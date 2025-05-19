package com.example.movie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.dto.ReviewDTO;
import com.example.movie.service.ReviewService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequiredArgsConstructor
@Log4j2
@RestController
@RequestMapping("/replies")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/{mno}")
    public Long postMethodName(@RequestBody ReviewDTO reviewDTO) {
        log.info("리뷰 등록 요청 {}", reviewDTO);

        Long rno = reviewService.insertReply(reviewDTO);

        return rno;
    }

    @GetMapping("/{mno}/all")
    public List<ReviewDTO> getList(@PathVariable Long mno) {
        log.info("review 요청 {}", mno);

        return reviewService.getReplies(mno);
    }

}
