package com.spring.module.controller;

import com.spring.module.model.User;
import com.spring.module.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserRestController {

    @Autowired
    UserService userService;

    @GetMapping("users")
    public List<User> getListOfUsers(){
        List<User>listOfUsers=userService.getUsers();
        return listOfUsers;
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        // below in order to create new id
        user.setId(0);
        userService.saveUser(user);
        return user;
    }

    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        userService.saveUser(user);
        return user;
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(@PathVariable int userId){
        userService.deleteUser(userId);
        return "Spring message: Deleted user with Id: "+userId;
    }

}
