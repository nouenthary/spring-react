package com.reactspring.springreact.repository;

import com.reactspring.springreact.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    List<Employee> findByName(String name);
    List<Employee> findByNameLike(String name);

    Optional<Employee> findByEmail(String email);
}
