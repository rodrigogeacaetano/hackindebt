package com.hack.debit.controller;

import com.hack.debit.model.Reward;
import com.hack.debit.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by arnaldo on 22/10/2017.
 */
@RestController("/rewards/updateRewards")
public class RewardController {

    @Autowired
    private RewardService rewardService;

    @RequestMapping(method = RequestMethod.PUT)
    public Reward addRewardToUser(String userId, Long reward){
        return rewardService.addRewardToUser(userId, reward);
    }

}
