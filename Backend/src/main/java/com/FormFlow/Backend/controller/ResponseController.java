package com.FormFlow.Backend.controller;

import com.FormFlow.Backend.entity.FormResponse;
import com.FormFlow.Backend.service.ResponseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/responses")
@CrossOrigin
public class ResponseController {

    private final ResponseService service;

    public ResponseController(ResponseService service) {
        this.service = service;
    }

    @PostMapping
    public FormResponse submit(@RequestBody FormResponse response) {
        return service.saveResponse(response);
    }

    @GetMapping("/{formId}")
    public List<FormResponse> getResponses(@PathVariable Long formId) {
        return service.getResponses(formId);
    }
}
