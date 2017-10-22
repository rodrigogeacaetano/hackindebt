package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Entity
@Table(name="reward_reward")
public class Reward extends JPAEntity{

    private String userId;

    private Long quantity;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
