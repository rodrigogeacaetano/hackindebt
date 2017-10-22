package com.hack.debit.service;

import com.hack.debit.contoller.vo.AlertVO;
import com.hack.debit.contoller.vo.PlaceVO;
import com.hack.debit.places.PlacesApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Service
public class FinancialAlertsService {

    @Autowired
    private PlacesApiService placesApiService;

    public List<AlertVO> getAlerts(Double lat, Double lng) {
        List<AlertVO> alerts = new ArrayList<>();
        List<PlaceVO> places = placesApiService.getPlace(lat, lng);
        places.forEach(placeVO -> {
            AlertVO alertVO = new AlertVO();
            alertVO.setName("Alerta de Gastos");
            alertVO.setPlace(placeVO);
            alerts.add(alertVO);
        });
        return alerts;
    }

}
