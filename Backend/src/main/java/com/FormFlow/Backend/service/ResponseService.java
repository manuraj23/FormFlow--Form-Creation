package com.FormFlow.Backend.service;

import com.FormFlow.Backend.entity.FormResponse;
import com.FormFlow.Backend.repository.FormResponseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    private final FormResponseRepository repository;

    public ResponseService(FormResponseRepository repository) {
        this.repository = repository;
    }

    public FormResponse saveResponse(FormResponse response) {
        return repository.save(response);
    }

    public List<FormResponse> getResponses(Long formId) {
        return repository.findByFormId(formId);
    }
}
