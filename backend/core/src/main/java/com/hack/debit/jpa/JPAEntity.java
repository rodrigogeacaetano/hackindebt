package com.hack.debit.jpa;

import javax.persistence.*;

/**
 * Created by arnaldo on 21/10/2017.
 */

@MappedSuperclass
public class JPAEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

}
