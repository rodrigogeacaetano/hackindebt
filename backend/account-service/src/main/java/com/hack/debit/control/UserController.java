package com.hack.debit.control;

import com.hack.debit.model.User;
import com.hack.debit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Controller ("/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @PostConstruct
    public void teste() {
        System.out.print("123");
    }

}
