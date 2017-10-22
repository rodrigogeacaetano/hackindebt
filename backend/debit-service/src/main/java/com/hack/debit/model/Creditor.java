package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by arnaldo on 21/10/2017.
 */
@Entity
@Table(name="debit_creditor")
public class Creditor extends JPAEntity {

    private String name;

    @Column(unique = true)
    private String companyId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }
}
