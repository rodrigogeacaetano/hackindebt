package com.hack.debit.service;

import com.hack.debit.model.CashAvailability;
import com.hack.debit.model.Debit;
import com.hack.debit.model.Proposal;
import com.hack.debit.model.ProposalStatus;
import com.hack.debit.repository.CashAvailabilityRepository;
import com.hack.debit.repository.DebitRepository;
import com.hack.debit.repository.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

/**
 * Created by arnaldo on 22/10/2017.
 */
@Service
public class DebitServiceImpl implements DebitService {

    //@Autowired
    //private RewardService rewardService;

    @Autowired
    private ProposalRepository proposalRepository;

    @Autowired
    private DebitRepository debitRepository;

    @Autowired
    private CashAvailabilityRepository cashAvailabilityRepository;

    public void generateProposals(String userId) {
        List<Debit> debits = debitRepository.findByUserId(userId);
        CashAvailability cashAvailability = cashAvailabilityRepository.findByUserId(userId);
        double monthlyAmount = 0.0;
        if (cashAvailability != null) {
            monthlyAmount = cashAvailability.getMonthlyAmount();
        }

        Double finalMonthlyAmount = monthlyAmount;
        debits.stream().filter(debit -> proposalRepository.findByDebitId(debit.getId()).size() == 0)
                .forEach(debit -> {
            Proposal proposal = new Proposal();
            proposal.setDebit(debit);

            Calendar calendar = GregorianCalendar.getInstance();
            calendar.add(Calendar.DAY_OF_MONTH, 30);
            proposal.setDueDate(calendar.getTime());
            if (debit.getTotalAmount() < finalMonthlyAmount) {
                proposal.setInstallmentAmount(debit.getTotalAmount());
                proposal.setInstallments(1L);
            }
            else {
                long installments = (long) Math.ceil(debit.getTotalAmount() / finalMonthlyAmount);
                proposal.setInstallmentAmount(debit.getTotalAmount() / installments);
                proposal.setInstallments(installments);
                proposal.setTotalAmount(installments * proposal.getInstallmentAmount());
            }
            proposal.setProposalStatus(ProposalStatus.VALID);
            proposal.setUserId(userId);

            proposalRepository.save(proposal);
        });
    }

}
