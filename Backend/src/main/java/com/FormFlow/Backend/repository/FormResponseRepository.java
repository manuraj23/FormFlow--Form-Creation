package com.FormFlow.Backend.repository;

import com.FormFlow.Backend.entity.FormResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FormResponseRepository extends JpaRepository<FormResponse, Long> {

    List<FormResponse> findByFormId(Long formId);

    // Example JSON query
    @Query(value = "SELECT * FROM form_responses WHERE response ->> 'Email' = :email", nativeQuery = true)
    List<FormResponse> findByEmail(String email);
}