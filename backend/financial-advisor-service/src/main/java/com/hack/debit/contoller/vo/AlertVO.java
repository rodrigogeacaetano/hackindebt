package com.hack.debit.contoller.vo;

public class AlertVO {

    private String name;

    private PlaceVO place;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPlace(PlaceVO place) {
        this.place = place;
    }

    public PlaceVO getPlace() {
        return place;
    }
}
