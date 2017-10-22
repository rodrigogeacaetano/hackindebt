package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Entity
@Table(name = "debit_proposals")
public class Proposal extends JPAEntity {

    @ManyToOne(optional = false)
    private Debit debit;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private Double totalAmount;

    @Column(nullable = false)
    private Long installments;

    @Column(nullable = false)
    private Double installmentAmount;

    @Column(nullable = false)
    private Date dueDate;

    @Enumerated(EnumType.STRING)
    private ProposalStatus proposalStatus = ProposalStatus.VALID;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Debit getDebit() {
        return debit;
    }

    public void setDebit(Debit debit) {
        this.debit = debit;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Long getInstallments() {
        return installments;
    }

    public void setInstallments(Long installments) {
        this.installments = installments;
    }

    public Double getInstallmentAmount() {
        return installmentAmount;
    }

    public void setInstallmentAmount(Double installmentAmount) {
        this.installmentAmount = installmentAmount;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public ProposalStatus getProposalStatus() {
        return proposalStatus;
    }

    public void setProposalStatus(ProposalStatus proposalStatus) {
        this.proposalStatus = proposalStatus;
    }
}
