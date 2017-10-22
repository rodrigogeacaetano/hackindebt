package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;
import org.springframework.beans.factory.annotation.Required;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Entity
@Table(name="debit_debits")
public class Debit extends JPAEntity {

    @ManyToOne(optional = false)
    private Creditor creditor;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private double totalAmount;

    @Column(nullable = true)
    private Date dueDate;

    private int maxInstallments;

    private double maxDiscount;

    public Creditor getCreditor() {
        return creditor;
    }

    public void setCreditor(Creditor creditor) {
        this.creditor = creditor;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public int getMaxInstallments() {
        return maxInstallments;
    }

    public void setMaxInstallments(int maxInstallments) {
        this.maxInstallments = maxInstallments;
    }

    public double getMaxDiscount() {
        return maxDiscount;
    }

    public void setMaxDiscount(double maxDiscount) {
        this.maxDiscount = maxDiscount;
    }
}
