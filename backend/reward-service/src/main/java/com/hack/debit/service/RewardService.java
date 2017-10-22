package com.hack.debit.service;

import com.hack.debit.model.Reward;

/**
 * Created by arnaldo on 22/10/2017.
 */
public interface RewardService {

    Reward addRewardToUser(String userId, Long quantity);

}
