package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Entity
@Table(name="debit_cupom")
public class Cupom extends JPAEntity {

    @Column(nullable = false)
    private String desctiption;

    @Column(nullable = false)
    private Long grantedAtInstallment;

    private Date dueDate;

    private Date validity;

    @ManyToOne(optional = false)
    private Debit debit;

    public String getDesctiption() {
        return desctiption;
    }

    public void setDesctiption(String desctiption) {
        this.desctiption = desctiption;
    }

    public Long getGrantedAtInstallment() {
        return grantedAtInstallment;
    }

    public void setGrantedAtInstallment(Long grantedAtInstallment) {
        this.grantedAtInstallment = grantedAtInstallment;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getValidity() {
        return validity;
    }

    public void setValidity(Date validity) {
        this.validity = validity;
    }

    public Debit getDebit() {
        return debit;
    }

    public void setDebit(Debit debit) {
        this.debit = debit;
    }
}
