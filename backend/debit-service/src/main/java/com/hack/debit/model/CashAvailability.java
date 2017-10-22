package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Entity
@Table(name = "debit_cash_availability")
public class CashAvailability extends JPAEntity{

    private String userId;

    private Double monthlyAmount;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Double getMonthlyAmount() {
        return monthlyAmount;
    }

    public void setMonthlyAmount(Double monthlyAmount) {
        this.monthlyAmount = monthlyAmount;
    }
}
