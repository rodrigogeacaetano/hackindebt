package com.hack.debit.repository;

import com.hack.debit.model.Creditor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by arnaldo on 21/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "creditor", path = "creditors")
public interface CreditorRepository extends PagingAndSortingRepository<Creditor, Long> {

}
