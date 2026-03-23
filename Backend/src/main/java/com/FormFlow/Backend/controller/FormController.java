package com.FormFlow.Backend.controller;

import com.FormFlow.Backend.entity.Form;
import com.FormFlow.Backend.service.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
@CrossOrigin
public class FormController {

    private final FormService service;

    public FormController(FormService service) {
        this.service = service;
    }

    @PostMapping
    public Form createForm(@RequestBody Form form) {
        return service.createForm(form);
    }

    @GetMapping
    public List<Form> getAllForms() {
        return service.getAllForms();
    }

    @GetMapping("/{id}")
    public Form getForm(@PathVariable Long id) {
        return service.getFormById(id);
    }
}
