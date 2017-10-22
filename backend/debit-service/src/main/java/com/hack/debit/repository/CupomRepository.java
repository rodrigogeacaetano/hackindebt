package com.hack.debit.repository;

import com.hack.debit.model.Creditor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by arnaldo on 22/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "cupom", path = "cupoms")
public interface CupomRepository extends PagingAndSortingRepository<Creditor, Long> {

}
