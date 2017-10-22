package com.hack.debit.repository;

import com.hack.debit.model.Debit;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by arnaldo on 21/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "debit", path = "debits")
public interface DebitRepository extends PagingAndSortingRepository<Debit, Long> {

    List<Debit> findByUserId(@Param("userId") String userId);

}
