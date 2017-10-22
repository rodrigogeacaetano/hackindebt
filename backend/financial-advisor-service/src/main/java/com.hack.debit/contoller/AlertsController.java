package com.hack.debit.contoller;

import com.hack.debit.contoller.vo.AlertVO;
import com.hack.debit.service.FinancialAlertsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by arnaldo on 22/10/2017.
 */
@RestController("/alerts")
public class AlertsController {

    @Autowired
    private FinancialAlertsService financialAlertsService;

    @RequestMapping(method = RequestMethod.GET)
    public List<AlertVO> getAlerts(Double lat, Double lng) {
        return financialAlertsService.getAlerts(lat, lng);
    }

}
