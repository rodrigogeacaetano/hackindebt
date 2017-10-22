package com.hack.debit.service;

import com.hack.debit.model.Reward;
import com.hack.debit.repository.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Service
public class RewardService {

    @Autowired
    private RewardRepository rewardRepository;

    public void AddRewardToUser(String userId, Long quantity) {
        Reward userReward = rewardRepository.findByUserId(userId);
        if (userReward != null) {
            userReward = new Reward();
            userReward.setUserId(userId);
        }
        else {
            userReward.setQuantity(userReward.getQuantity() + quantity);
        }
        rewardRepository.save(userReward);
    }
}
