package com.FormFlow.Backend.repository;

import com.FormFlow.Backend.entity.Form;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form, Long> {
}
