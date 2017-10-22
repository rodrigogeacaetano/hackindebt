package com.hack.debit.repository;

import com.hack.debit.model.CashAvailability;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by arnaldo on 21/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "cashAvailability", path = "cashAvailabilities")
public interface CashAvailabilityRepository extends PagingAndSortingRepository<CashAvailability, Long> {

    CashAvailability findByUserId(@Param("userId") String userId);

}
