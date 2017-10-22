package com.hack.debit.repository;

import com.hack.debit.model.Reward;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by arnaldo on 22/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "reward", path = "rewards")
public interface RewardRepository extends PagingAndSortingRepository<Reward, Long> {

    Reward findByUserId(@Param("userId") String userId);

}
