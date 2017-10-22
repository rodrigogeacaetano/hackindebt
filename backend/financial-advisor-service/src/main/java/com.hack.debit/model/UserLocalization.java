package com.hack.debit.model;

import com.hack.debit.jpa.JPAEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Entity
@Table(name="financial_advisor_userlocalization")
public class UserLocalization extends JPAEntity {

    private String userId;

    private Double latitude;

    private Double longitude;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
