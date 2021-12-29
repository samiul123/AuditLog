package com.amag.interview.auditlog.endpoint;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SiteController {

    @GetMapping("/welcome")
    public String getWelcome() {
        return "Welcome";
    }
}
