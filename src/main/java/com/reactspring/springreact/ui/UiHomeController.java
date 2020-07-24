package com.reactspring.springreact.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UiHomeController {

    @GetMapping(path = {"/", "/employee"})
    public ModelAndView employee() {
        ModelAndView view = new ModelAndView();
        view.setViewName("Employee");
        return view;
    }
}
