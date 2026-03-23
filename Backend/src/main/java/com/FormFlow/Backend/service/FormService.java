package com.FormFlow.Backend.service;

import com.FormFlow.Backend.entity.Form;
import com.FormFlow.Backend.repository.FormRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormService {

    private final FormRepository repository;

    public FormService(FormRepository repository) {
        this.repository = repository;
    }

    public Form createForm(Form form) {
        return repository.save(form);
    }

    public List<Form> getAllForms() {
        return repository.findAll();
    }

    public Form getFormById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found"));
    }
}
