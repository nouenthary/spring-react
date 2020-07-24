package com.reactspring.springreact.controller;

import com.reactspring.springreact.models.Employee;
import com.reactspring.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping(value = "/test")
    public List<Employee> test() {
        return employeeRepository.findAll();
    }

    @GetMapping(value = "/test2")
    public Optional<Employee> test2() {
        int id = 2;
        return employeeRepository.findById(id);
    }

    @GetMapping(value = "/test3")
    public List<Employee> test3() {
        String name = "Maria";
        String likeName = "%" + name + "%";
        return employeeRepository.findByNameLike(name);
    }

    @PostMapping(value = "/create")
    public Map<String, Object> create(@RequestBody Employee data) {
        HashMap<String, Object> response = new HashMap<String, Object>();

        try {

            Optional<Employee> validEmail = employeeRepository.findByEmail(data.getEmail());

            if (validEmail.isPresent()) {
                response.put("message", "The email " + data.getEmail() + " is already registered ");
                response.put("success", false);
                return response;
            } else {
                employeeRepository.save(data);
                response.put("message", "Successful save");
                response.put("success", true);
                return response;
            }


        } catch (Exception e) {
            // TODO: handle exception
            response.put("message", e.getMessage());
            response.put("success", false);
            return response;
        }

    }


    @GetMapping(value = "/list")
    public Map<String, Object> list() {

        HashMap<String, Object> response = new HashMap<String, Object>();

        try {
            List<Employee> employeeList;
            employeeList = employeeRepository.findAll();
            response.put("message", "Successful load");
            response.put("list", employeeList);
            response.put("success", true);
            return response;

        } catch (Exception e) {
            response.put("message", e.getMessage());
            response.put("success ", false);
            return response;
        }

    }


    @GetMapping(value = "get/{id}")
    public Map<String, Object> data(@PathVariable("id") Integer id) {

        HashMap<String, Object> response = new HashMap<String, Object>();

        try {

            Optional<Employee> employee = employeeRepository.findById(id);

            if (employee.isPresent()) {
                response.put("message", "Successful load");
                response.put("data", employee);
                response.put("success", true);
                return response;
            } else {
                response.put("message", "Not found data");
                response.put("data", null);
                response.put("success", false);
                return response;
            }

        } catch (Exception e) {
            response.put("message", "" + e.getMessage());
            response.put("success", false);
            return response;
        }
    }


    @PutMapping(value = "/update/{id}")
    public Map<String, Object> update(@PathVariable("id") Integer id,
                                      @RequestBody Employee data) {

        HashMap<String, Object> response = new HashMap<String, Object>();

        try {
            data.setId(id);
            employeeRepository.save(data);
            response.put("message", "Successful update");
            response.put("success", true);
            return response;
        } catch (Exception e) {
            response.put("message", e.getMessage());
            response.put("success", false);
            return response;
        }

    }

    @DeleteMapping(value = "/delete/{id}")
    public Map<String, Object> update(@PathVariable("id") Integer id) {

        HashMap<String, Object> response = new HashMap<String, Object>();

        try {
            employeeRepository.deleteById(id);
            ;
            response.put("message", "Successful delete");
            response.put("success", true);
            return response;
        } catch (Exception e) {
            response.put("message", e.getMessage());
            response.put("success", false);
            return response;
        }

    }
}
