package com.hack.debit.repository;

import com.hack.debit.model.Proposal;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by arnaldo on 21/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "proposal", path = "proposals")
public interface ProposalRepository extends PagingAndSortingRepository<Proposal, Long> {

    List<Proposal> findByUserId(@Param("userId") String userId);

    List<Proposal> findByDebitId(@Param("debitId") Long debitId);
    
}
