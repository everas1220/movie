package com.example.movie.controller;

import org.springframework.stereotype.Controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.movie.dto.PageRequestDTO;

@Log4j2
@Controller
public class HomeController {

    @GetMapping("/")
    public String getHome(PageRequestDTO pageRequestDTO, RedirectAttributes rttr) {

        rttr.addAttribute("page", PageRequestDTO.getPage());
        rttr.addAttribute("size", PageRequestDTO.getSize());
        rttr.addAttribute("type", PageRequestDTO.getType());
        rttr.addAttribute("keyword", PageRequestDTO.getKeyword());

        return "redirect:/movie/list";
    }

    @GetMapping("/error")
    public String getError() {
        return "/except/url404";
    }

}
