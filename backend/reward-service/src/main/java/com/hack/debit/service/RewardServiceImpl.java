package com.hack.debit.service;

import com.hack.debit.model.Reward;
import com.hack.debit.repository.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Service
public class RewardServiceImpl implements RewardService {

    @Autowired
    private RewardRepository rewardRepository;

    public Reward addRewardToUser(String userId, Long quantity) {
        Reward userReward = rewardRepository.findByUserId(userId);
        if (userReward == null) {
            userReward = new Reward();
            userReward.setUserId(userId);
            userReward.setQuantity(quantity);
        }
        else {
            userReward.setQuantity(userReward.getQuantity() + quantity);
        }
        return rewardRepository.save(userReward);
    }
}
