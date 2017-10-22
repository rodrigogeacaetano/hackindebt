package com.hack.debit.control;

import com.hack.debit.service.DebitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by arnaldo on 22/10/2017.
 */
@RestController()
public class DebitServiceController {

    @Autowired
    private DebitService debitService;

    @RequestMapping(method = RequestMethod.POST, path = "/proposals/generate")
    public void generateProposals(String userId) {
        debitService.generateProposals(userId);
    }
}
