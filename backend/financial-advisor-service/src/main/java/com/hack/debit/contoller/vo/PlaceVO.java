package com.hack.debit.contoller.vo;

/**
 * Created by arnaldo on 22/10/2017.
 */
public class PlaceVO {

    private String name;

    private Long priceLevel;

    private Double lat;

    private Double lng;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPriceLevel() {
        return priceLevel;
    }

    public void setPriceLevel(Long priceLevel) {
        this.priceLevel = priceLevel;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }
}
