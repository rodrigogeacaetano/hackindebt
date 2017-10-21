package com.hack.debit.repository;

import com.hack.debit.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by arnaldo on 21/10/2017.
 */
@RepositoryRestResource(collectionResourceRel = "user", path = "users")
public interface UserRepository extends PagingAndSortingRepository<User,Long> {

    User findByEmail(@Param("email") String email);

    User findByExternalId(@Param("externalId") String externalId);
}
