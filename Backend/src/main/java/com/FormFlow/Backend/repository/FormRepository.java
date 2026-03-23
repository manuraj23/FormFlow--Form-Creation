package com.FormFlow.Backend.repository;

import com.FormFlow.Backend.entity.Form;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form, Long> {
}

//FormResponse res = repository.findById(1L).get();
//
//Integer age = (Integer) res.getResponse().get("Age");
//String email = (String) res.getResponse().get("Email");
//String branch = (String) res.getResponse().get("Branch");

//QUERY JSON IN POSTGRES
//SELECT response ->> 'Email'
//FROM form_responses;